import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const HISTORY_KEY = "request-history";
const MAX_HISTORY = 50;

const HistoryContext = createContext(null);

const loadHistory = () => {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    localStorage.removeItem(HISTORY_KEY);
    return [];
  }
};

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState(loadHistory);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = useCallback((entry) => {
    const record = {
      id: `hist-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
      ...entry,
    };

    setHistory((prev) => [record, ...prev].slice(0, MAX_HISTORY));
    setActiveId(record.id);
    return record.id;
  }, []);

  const removeFromHistory = useCallback((id) => {
    setHistory((prev) => prev.filter((h) => h.id !== id));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setActiveId(null);
  }, []);

  const getById = useCallback(
    (id) => history.find((h) => h.id === id) || null,
    [history]
  );

  const presentRequest = useMemo(
    () => (activeId ? getById(activeId) : history[0] || null),
    [activeId, getById, history]
  );

  const value = useMemo(
    () => ({
      history,
      presentRequest,
      addToHistory,
      removeFromHistory,
      clearHistory,
      getById,
      setActiveId,
    }),
    [history, presentRequest, addToHistory, removeFromHistory, clearHistory, getById]
  );

  return (
    <HistoryContext.Provider value={value}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const ctx = useContext(HistoryContext);
  if (!ctx) throw new Error("useHistory must be used inside HistoryProvider");
  return ctx;
};
