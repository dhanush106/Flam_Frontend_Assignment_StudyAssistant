import { motion } from "framer-motion";

import ModuleCard from "./ModuleCard";
import TimelineNode from "./TimelineNode";

const Timeline = ({ roadmap }) => {
  return (
    <div className="relative mx-auto max-w-5xl">

      {/* Vertical Timeline Line */}

      <div
        className="
        absolute
        left-8
        top-0
        bottom-0
        w-1
        rounded-full
        bg-slate-200"
      />

      <div className="space-y-12">

        {roadmap.map((module, index) => (
          <motion.div
            key={module.id}
            id={module.id}
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
            className="relative flex gap-8"
          >
            {/* Timeline Node */}

            <TimelineNode
              module={module}
            />

            {/* Card */}

            <div className="flex-1">

              <ModuleCard
                module={module}
              />

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default Timeline;