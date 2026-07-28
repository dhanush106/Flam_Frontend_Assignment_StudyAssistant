import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ProgressContext = createContext(null);

const PROGRESS_PREFIX = "roadmap-progress-";

export const ProgressProvider = ({
  children,
  roadmap = [],
  topicId = "default",
}) => {
  const storageKey = `${PROGRESS_PREFIX}${topicId}`;
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setCompletedModules(JSON.parse(saved));
      }
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(completedModules)
    );
  }, [completedModules, storageKey]);

  const toggleModule = (id) => {
    setCompletedModules((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const resetProgress = () => {
    setCompletedModules([]);
  };

  const progress = useMemo(() => {
    if (!roadmap.length) return 0;
    return Math.round(
      (completedModules.length / roadmap.length) * 100
    );
  }, [completedModules, roadmap]);

  const completed = roadmap.length > 0 && completedModules.length === roadmap.length;

  const value = {
    roadmap,
    completedModules,
    toggleModule,
    resetProgress,
    progress,
    completed,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error(
      "useProgress must be used inside ProgressProvider"
    );
  }

  return context;
};
