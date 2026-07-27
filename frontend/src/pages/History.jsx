import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  BookOpen,
  StickyNote,
  Trash2,
  XCircle,
  ArrowRight,
  History,
} from "lucide-react";

import { useHistory } from "../context/HistoryContext";

const HistoryPage = () => {
  const { history, removeFromHistory, clearHistory, setActiveId } =
    useHistory();
  const navigate = useNavigate();
  const [confirmClear, setConfirmClear] = useState(false);

  const formatTime = (iso) => {
    const d = new Date(iso);
    const now = new Date();
    const diffMs = now - d;
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMin / 60);

    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHr < 24) return `${diffHr}h ago`;

    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTitle = (entry) => {
    if (entry.content?.metadata?.title) return entry.content.metadata.title;
    if (entry.mode === "topic") return entry.topic || "Topic Generation";
    return "Notes Generation";
  };

  const getPreview = (entry) => {
    if (entry.content?.summary) {
      return entry.content.summary.slice(0, 120) + "...";
    }
    if (entry.mode === "topic") {
      return `${entry.topic} - ${entry.difficulty || ""} ${entry.depth || ""}`.trim();
    }
    return (entry.notes || "").slice(0, 120) + "...";
  };

  const handleView = (entry) => {
    setActiveId(entry.id);
    if (entry.content) {
      navigate("/results", {
        state: { content: entry.content, historyId: entry.id },
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-3 text-4xl font-black text-slate-900">
              <History className="text-emerald-600" size={36} />
              History
            </h1>
            <p className="mt-2 text-slate-500">
              {history.length} previous request{history.length !== 1 && "s"}
            </p>
          </div>

          {history.length > 0 && (
            <div className="relative">
              {confirmClear ? (
                <div className="glass flex items-center gap-3 rounded-2xl border border-red-200 bg-white/80 px-5 py-3 shadow-lg">
                  <span className="text-sm text-slate-700">
                    Clear all?
                  </span>
                  <button
                    onClick={() => {
                      clearHistory();
                      setConfirmClear(false);
                    }}
                    className="rounded-lg bg-red-500 px-3 py-1 text-xs font-semibold text-white transition hover:bg-red-600"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setConfirmClear(false)}
                    className="rounded-lg bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-300"
                  >
                    No
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmClear(true)}
                  className="glass flex items-center gap-2 rounded-full border border-red-200 bg-white/60 px-5 py-2.5 text-sm font-medium text-red-500 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={16} />
                  Clear All
                </button>
              )}
            </div>
          )}
        </div>

        {/* Empty state */}
        {history.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-[32px] px-8 py-20 text-center"
          >
            <History
              size={64}
              className="mx-auto mb-6 text-slate-300"
            />
            <h2 className="mb-3 text-2xl font-bold text-slate-700">
              No history yet
            </h2>
            <p className="mx-auto max-w-md text-slate-500">
              Generate your first learning content and it will appear here for
              easy access later.
            </p>
            <button
              onClick={() => navigate("/generate")}
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-button px-8 py-3.5 font-semibold text-white shadow-lg"
            >
              Start Generating
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}

        {/* History list */}
        <div className="space-y-4">
          <AnimatePresence>
            {history.map((entry, i) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    {/* Mode badge */}
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                          entry.mode === "topic"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-sky-100 text-sky-700"
                        }`}
                      >
                        {entry.mode === "topic" ? (
                          <BookOpen size={12} />
                        ) : (
                          <StickyNote size={12} />
                        )}
                        {entry.mode === "topic" ? "Topic" : "Notes"}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock size={12} />
                        {formatTime(entry.timestamp)}
                      </span>

                      {entry.mode === "topic" && entry.difficulty && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          {entry.difficulty}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="truncate text-lg font-bold text-slate-800">
                      {getTitle(entry)}
                    </h3>

                    {/* Preview */}
                    <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                      {getPreview(entry)}
                    </p>

                    {/* Feature tags */}
                    {entry.mode === "topic" && (
                      <div className="mt-3 flex gap-2">
                        {entry.roadmap && (
                          <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-600">
                            Roadmap
                          </span>
                        )}
                        {entry.flashcards && (
                          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-600">
                            Flashcards
                          </span>
                        )}
                        {entry.depth && (
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                            {entry.depth}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2">
                    {entry.content && (
                      <button
                        onClick={() => handleView(entry)}
                        className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-100 hover:text-emerald-700"
                      >
                        View
                        <ArrowRight size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => removeFromHistory(entry.id)}
                      className="rounded-full p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                      title="Remove from history"
                    >
                      <XCircle size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
};

export default HistoryPage;
