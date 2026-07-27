import { motion } from "framer-motion";
import {
  Trophy,
  RotateCcw,
  Sparkles,
  Home,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CompletionScreen = ({
  totalCards,
  restart,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex min-h-[80vh] items-center justify-center px-6 py-12"
    >
      <div
        className="
          w-full
          max-w-3xl
          rounded-[32px]
          border
          border-white/50
          bg-white/80
          p-10
          text-center
          shadow-2xl
          backdrop-blur-xl
        "
      >
        {/* Trophy */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 shadow-xl"
        >
          <Trophy
            size={60}
            className="text-white"
          />
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-black text-slate-800"
        >
          Congratulations!
        </motion.h1>

        <p className="mt-4 text-lg text-slate-500">
          You've completed this flashcard session.
        </p>

        {/* Stats */}

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div
            className="
              rounded-2xl
              bg-sky-50
              p-6
            "
          >
            <BookOpen
              className="mx-auto mb-3 text-sky-600"
              size={30}
            />

            <p className="text-4xl font-black text-slate-800">
              {totalCards}
            </p>

            <p className="mt-2 text-slate-500">
              Cards Studied
            </p>

          </div>

          <div
            className="
              rounded-2xl
              bg-emerald-50
              p-6
            "
          >
            <Sparkles
              className="mx-auto mb-3 text-emerald-600"
              size={30}
            />

            <p className="text-4xl font-black text-slate-800">
              100%
            </p>

            <p className="mt-2 text-slate-500">
              Completion
            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={restart}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-sky-500
              to-indigo-500
              px-7
              py-4
              font-semibold
              text-white
              shadow-lg
            "
          >
            <RotateCcw size={20} />
            Study Again
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => navigate("/generate")}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-7
              py-4
              font-semibold
              text-slate-700
              shadow-md
            "
          >
            <BookOpen size={20} />
            Generate More
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => navigate("/")}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-7
              py-4
              font-semibold
              text-slate-700
              shadow-md
            "
          >
            <Home size={20} />
            Home
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
};

export default CompletionScreen;