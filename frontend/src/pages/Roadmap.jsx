import { Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { ProgressProvider, useProgress } from "../context/ProgressContext";
import { useHistory } from "../context/HistoryContext";

import ProgressHeader from "../components/roadmap/ProgressHeader";
import Timeline from "../components/roadmap/Timeline";
import CompletionModal from "../components/roadmap/CompletionModal";

const RoadmapContent = ({ roadmap, flashcards }) => {
  const { completed } = useProgress();

  return (
    <>
      <ProgressHeader />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Timeline roadmap={roadmap} />
      </section>

      <CompletionModal
        open={completed}
        flashcards={flashcards}
      />
    </>
  );
};

const Roadmap = () => {
  const { state } = useLocation();
  const { presentRequest } = useHistory();

  const resolvedRoadmap =
    state?.roadmap || presentRequest?.content?.roadmap || null;
  const resolvedFlashcards =
    state?.flashcards || presentRequest?.content?.flashcards || [];

  if (!resolvedRoadmap) {
    return <Navigate to="/generate" replace />;
  }

  const roadmap = resolvedRoadmap;
  const flashcards = resolvedFlashcards;
  const topicId = state?.topicId || presentRequest?.id || "default";

  return (
    <ProgressProvider roadmap={roadmap} topicId={topicId}>
      <motion.main
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-gradient-to-br
          from-slate-50
          via-white
          to-emerald-50
        "
      >
        {/* Background Blur */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              -top-32
              -left-24
              h-80
              w-80
              rounded-full
              bg-emerald-300/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-0
              h-96
              w-96
              rounded-full
              bg-sky-300/20
              blur-3xl
            "
          />
        </div>

        <div className="relative z-10">
          <RoadmapContent
            roadmap={roadmap}
            flashcards={flashcards}
          />
        </div>
      </motion.main>
    </ProgressProvider>
  );
};

export default Roadmap;