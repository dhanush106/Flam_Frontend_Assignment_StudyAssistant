import { Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import FlashcardDeck from "../components/flashcards/FlashcardDeck";

const Flashcards = () => {
  const { state } = useLocation();

  if (!state?.flashcards) {
    return <Navigate to="/generate" replace />;
  }

  const flashcards = state.flashcards;

  return (
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
        to-sky-50
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -top-24
            left-0
            h-80
            w-80
            rounded-full
            bg-sky-300/20
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
            bg-emerald-300/20
            blur-3xl
          "
        />

      </div>

      <div className="relative z-10">

        <FlashcardDeck
          flashcards={flashcards}
        />

      </div>

    </motion.main>
  );
};

export default Flashcards;