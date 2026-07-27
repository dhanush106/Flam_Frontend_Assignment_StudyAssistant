import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import FlashcardDeck from "../components/flashcards/FlashcardDeck";
import { useHistory } from "../context/HistoryContext";

const Flashcards = () => {
  const { state } = useLocation();
  const { presentRequest } = useHistory();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const resolvedFlashcards =
    state?.flashcards ||
    (Array.isArray(presentRequest?.content?.flashcards)
      ? presentRequest.content.flashcards
      : null);

  if (
    !resolvedFlashcards ||
    resolvedFlashcards.length === 0
  ) {
    return <Navigate to="/generate" replace />;
  }

  const flashcards = resolvedFlashcards;

  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50"
    >
      {/* Decorative Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

      {/* Content */}

      <div className="relative z-10 container mx-auto px-6 py-10">
        <FlashcardDeck flashcards={flashcards} />
      </div>
    </motion.main>
  );
};

export default Flashcards;