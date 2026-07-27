import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useProgress } from "../../context/ProgressContext";

const TimelineNode = ({ module }) => {
  const {
    roadmap,
    completedModules,
  } = useProgress();

  const completed = completedModules.includes(module.id);

  const currentModule = roadmap.find(
    (item) => !completedModules.includes(item.id)
  );

  const active = currentModule?.id === module.id;

  return (
    <div className="relative flex flex-col items-center">

      {/* Pulse Ring */}

      {active && !completed && (
        <motion.div
          className="absolute h-10 w-10 rounded-full bg-emerald-400/30"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />
      )}

      {/* Node */}

      <motion.div
        animate={{
          scale: completed ? [1, 1.15, 1] : 1,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`
          relative
          z-10
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border-4
          transition-all
          duration-300

          ${
            completed
              ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-300"
              : active
              ? "bg-white border-emerald-500 text-emerald-600 shadow-lg shadow-emerald-200"
              : "bg-white border-slate-300 text-slate-400"
          }
        `}
      >
        {completed ? (
          <Check size={28} />
        ) : (
          <span className="font-bold">
            {roadmap.indexOf(module) + 1}
          </span>
        )}
      </motion.div>

      {/* Connector */}

      <div className="mt-2 h-20 w-[4px] rounded-full bg-slate-200 overflow-hidden">

        <motion.div
          className="w-full rounded-full bg-gradient-to-b from-emerald-500 to-sky-500"
          animate={{
            height: completed ? "100%" : "0%",
          }}
          transition={{
            duration: 0.6,
          }}
        />

      </div>

    </div>
  );
};

export default TimelineNode;