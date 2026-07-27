import { motion } from "framer-motion";
import {
  BookOpen,
  RotateCcw,
  Target,
  Trophy,
} from "lucide-react";
import { useProgress } from "../../context/ProgressContext";

const ProgressHeader = () => {
  const {
    roadmap,
    progress,
    completedModules,
    resetProgress,
  } = useProgress();

  const completedCount = completedModules.length;
  const totalModules = roadmap.length;

  const nextModule = roadmap.find(
    (module) => !completedModules.includes(module.id)
  );

  return (
    <header
      className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      bg-white/70
      border-b
      border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-5">

        {/* Top Row */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Left */}

          <div>

            <div className="flex items-center gap-3">

              <div className="p-3 rounded-2xl bg-emerald-100">

                <BookOpen
                  className="text-emerald-600"
                  size={24}
                />

              </div>

              <div>

                <h1 className="text-3xl font-bold text-slate-800">
                  Learning Roadmap
                </h1>

                <p className="text-slate-500 mt-1">
                  Complete every module to master this topic.
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex gap-3 flex-wrap">

            <button
              onClick={resetProgress}
              className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              bg-white
              border
              border-slate-200
              hover:bg-slate-50
              transition"
            >
              <RotateCcw size={18} />

              Reset
            </button>

            {nextModule && (
              <button
                onClick={() => {
                  document
                    .getElementById(nextModule.id)
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                }}
                className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-2xl
                bg-emerald-500
                text-white
                hover:bg-emerald-600
                transition"
              >
                <Target size={18} />

                Continue Learning
              </button>
            )}

          </div>

        </div>

        {/* Progress Section */}

        <div className="mt-8">

          <div className="flex justify-between items-center mb-3">

            <span className="text-slate-600 font-medium">

              {completedCount} / {totalModules} Modules Completed

            </span>

            <div className="flex items-center gap-2">

              <Trophy
                size={18}
                className="text-amber-500"
              />

              <span className="font-bold text-lg">

                {progress}%

              </span>

            </div>

          </div>

          {/* Animated Progress */}

          <div className="h-4 rounded-full bg-slate-200 overflow-hidden">

            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.6,
              }}
            />

          </div>

        </div>

      </div>
    </header>
  );
};

export default ProgressHeader;