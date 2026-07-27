import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

const Flashcards = () => {
  const { state } = useLocation();

  if (!state?.flashcards) {
    return <Navigate to="/generate" replace />;
  }

  const flashcards = state.flashcards;

  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const currentCard = flashcards[current];

  const progress =
    ((current + 1) / flashcards.length) * 100;

  const next = () => {
    if (current < flashcards.length - 1) {
      setFlipped(false);
      setCurrent((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (current > 0) {
      setFlipped(false);
      setCurrent((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped((prev) => !prev);
      }

      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handler);

    return () =>
      window.removeEventListener("keydown", handler);
  }, [current]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 px-6 py-12">

      <div className="mx-auto max-w-4xl">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-black text-slate-800">
            Flashcards
          </h1>

          <p className="mt-3 text-slate-500">
            Review your generated concepts.
          </p>
        </motion.div>

        {/* Progress */}

        <div className="mt-10">

          <div className="mb-2 flex justify-between text-sm text-slate-500">

            <span>
              Card {current + 1} / {flashcards.length}
            </span>

            <span>
              {Math.round(progress)}%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
              animate={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Card */}

        <div className="mt-12 flex justify-center">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              className="perspective"
            >

              <motion.div
                animate={{
                  rotateY: flipped ? 180 : 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                onClick={() =>
                  setFlipped(!flipped)
                }
                className="
                  relative
                  h-[380px]
                  w-[700px]
                  cursor-pointer
                  rounded-[32px]
                  preserve-3d
                "
              >

                {/* Front */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    rounded-[32px]
                    border
                    border-white/50
                    bg-white
                    p-12
                    text-center
                    shadow-xl
                    backface-hidden
                  "
                >

                  <div>

                    <p className="text-sm uppercase tracking-widest text-emerald-500">
                      Question
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-slate-800">
                      {currentCard.question}
                    </h2>

                    <p className="mt-10 text-slate-400">
                      Click or press SPACE to reveal
                    </p>

                  </div>

                </div>

                {/* Back */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    rotate-y-180
                    items-center
                    justify-center
                    rounded-[32px]
                    border
                    border-white/50
                    bg-gradient-to-br
                    from-emerald-500
                    to-sky-500
                    p-12
                    text-center
                    text-white
                    shadow-xl
                    backface-hidden
                  "
                >

                  <div>

                    <p className="text-sm uppercase tracking-widest">
                      Answer
                    </p>

                    <h2 className="mt-6 text-2xl leading-10">
                      {currentCard.answer}
                    </h2>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* Controls */}

        <div className="mt-14 flex justify-center gap-4">

          <button
            onClick={previous}
            disabled={current === 0}
            className="rounded-xl bg-white px-6 py-4 shadow disabled:opacity-50"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={() =>
              setFlipped(!flipped)
            }
            className="rounded-xl bg-slate-800 px-6 py-4 text-white shadow"
          >
            <RotateCcw />
          </button>

          <button
            onClick={next}
            disabled={current === flashcards.length - 1}
            className="rounded-xl bg-emerald-500 px-6 py-4 text-white shadow disabled:opacity-50"
          >
            <ArrowRight />
          </button>

        </div>

        {/* Finished */}

        {current === flashcards.length - 1 && flipped && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-12 text-center"
          >

            <CheckCircle2
              size={60}
              className="mx-auto text-emerald-500"
            />

            <h2 className="mt-4 text-3xl font-bold">
              Session Complete 🎉
            </h2>

            <p className="mt-2 text-slate-500">
              You've reviewed all flashcards.
            </p>

          </motion.div>

        )}

      </div>
    </main>
  );
};

export default Flashcards;