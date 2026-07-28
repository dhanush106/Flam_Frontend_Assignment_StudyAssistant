import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  CheckCircle2,
  Circle,
  Clock3,
  Layers3,
} from "lucide-react";

import { useProgress } from "../../context/ProgressContext";

const difficultyColors = {
  Easy: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  Hard: "bg-rose-100 text-rose-700",
};

const ModuleCard = ({ module }) => {
  const [expanded, setExpanded] = useState(false);

  const {
    completedModules,
    toggleModule,
  } = useProgress();

  const completed = completedModules.includes(module.id);

  return (
    <motion.div
      layout
      whileHover={{
        y: -3,
      }}
      className={`
        rounded-3xl
        border
        bg-white
        shadow-sm
        transition-all

        ${
          completed
            ? "border-emerald-300"
            : "border-slate-200"
        }
      `}
    >
      {/* Header */}

      <button
        onClick={() => setExpanded(!expanded)}
        className="
          flex
          w-full
          items-center
          justify-between
          p-7
          text-left
        "
      >
        <div>

          <div className="flex items-center gap-3 flex-wrap">

            <h2 className="text-2xl font-semibold text-slate-800">
              {module.title}
            </h2>

            <span
              className={`
                rounded-full
                px-3
                py-1
                text-sm
                font-medium
                ${
                  difficultyColors[module.difficulty] ??
                  "bg-slate-100 text-slate-700"
                }
              `}
            >
              {module.difficulty}
            </span>

          </div>

          <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-500">

            <div className="flex items-center gap-2">

              <Clock3 size={16} />

              {module.estimatedMinutes} mins

            </div>

            <div className="flex items-center gap-2">

              <Layers3 size={16} />

              {module.keyConcepts.length} Concepts

            </div>

          </div>

        </div>

        <motion.div
          animate={{
            rotate: expanded ? 180 : 0,
          }}
        >
          <ChevronDown />
        </motion.div>
      </button>

      {/* Expand */}

      <AnimatePresence>

        {expanded && (

          <motion.div
            layout
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7 border-t border-slate-100">

              {/* Description */}

              <p className="mt-6 leading-8 text-slate-600">
                {module.description}
              </p>

              {/* Concepts */}

              <div className="mt-8">

                <h3 className="font-semibold text-slate-700 mb-4">
                  Key Concepts
                </h3>

                <div className="flex flex-wrap gap-3">

                  {module.keyConcepts.map((concept) => (

                    <motion.div
                      key={concept}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="
                        rounded-full
                        bg-emerald-50
                        border
                        border-emerald-200
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-emerald-700
                      "
                    >
                      {concept}
                    </motion.div>

                  ))}

                </div>

              </div>

              {/* Complete Button */}

              <div className="mt-10">

                <motion.button
                  whileTap={{
                    scale: 0.96,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  onClick={() => toggleModule(module.id)}
                  className={`
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    px-6
                    py-4
                    font-semibold
                    transition

                    ${
                      completed
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-800 text-white"
                    }
                  `}
                >
                  {completed ? (
                    <>
                      <CheckCircle2 size={20} />
                      Completed
                    </>
                  ) : (
                    <>
                      <Circle size={20} />
                      Mark Complete
                    </>
                  )}
                </motion.button>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  );
};

export default ModuleCard;