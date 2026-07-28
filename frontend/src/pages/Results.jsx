import { useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Clock,
  Layers,
} from "lucide-react";

import SummaryCard from "../components/results/SummaryCard";
import StatsCard from "../components/results/StatsCard";
import RoadmapPreview from "../components/results/RoadmapPreview";
import FlashcardsPreview from "../components/results/FlashcardPreview";
import { useHistory } from "../context/HistoryContext";

const Results = () => {
  const { state } = useLocation();
  const { presentRequest, getById } = useHistory();

  const resolvedContent =
    state?.content ||
    (state?.historyId ? getById(state.historyId)?.content : null) ||
    presentRequest?.content ||
    null;

  if (!resolvedContent) {
    return <Navigate to="/generate" replace />;
  }

  const content = resolvedContent;
  const historyId = state?.historyId || presentRequest?.id || null;

  const metadata = content.metadata || {};

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Hero */}

        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold text-slate-800">
            {metadata.title}
          </h1>

          <p className="text-slate-500 mt-2">
            AI Generated Study Plan
          </p>
        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">

          <StatsCard
            icon={<BookOpen />}
            title="Modules"
            value={metadata.moduleCount || 0}
          />

          <StatsCard
            icon={<Clock />}
            title="Minutes"
            value={metadata.estimatedCompletionMinutes || 0}
          />

          <StatsCard
            icon={<Brain />}
            title="Level"
            value={metadata.level}
          />

          <StatsCard
            icon={<Layers />}
            title="Depth"
            value={metadata.depth}
          />

        </div>

        {/* Summary */}

        <SummaryCard summary={content.summary} />

        {/* Actions */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <RoadmapPreview
            roadmap={content.roadmap}
            flashcards={content.flashcards}
            historyId={historyId}
          />

          <FlashcardsPreview
            flashcards={content.flashcards}
          />

        </div>

      </div>
    </motion.div>
  );
};

export default Results;