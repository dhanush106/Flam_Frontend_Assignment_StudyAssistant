import { motion } from "framer-motion";
import { BookOpen, Trophy } from "lucide-react";

const ProgressBar = ({
  current,
  total,
  progress,
}) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/50
        bg-white/80
        backdrop-blur-xl
        p-6
        shadow-lg
      "
    >
      {/* Top Row */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-sky-100
            "
          >
            <BookOpen
              className="text-sky-600"
              size={22}
            />
          </div>

          <div>

            <h3 className="font-bold text-slate-800">
              Flashcard Progress
            </h3>

            <p className="text-sm text-slate-500">
              Card {current} of {total}
            </p>

          </div>

        </div>

        <div className="text-right">

          <div className="flex items-center gap-2">

            <Trophy
              size={18}
              className="text-amber-500"
            />

            <span
              className="
                text-2xl
                font-black
                text-slate-800
              "
            >
              {progress}%
            </span>

          </div>

        </div>

      </div>

      {/* Progress Track */}

      <div
        className="
          mt-6
          h-4
          overflow-hidden
          rounded-full
          bg-slate-200
        "
      >

        <motion.div
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-emerald-500
            via-sky-500
            to-indigo-500
          "
        />

      </div>

    </div>
  );
};

export default ProgressBar;