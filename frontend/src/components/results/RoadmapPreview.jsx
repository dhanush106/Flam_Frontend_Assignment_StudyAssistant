import { Route } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RoadmapPreview = ({ roadmap,flashcards }) => {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl border border-slate-100 p-8"
    >
      <div className="flex justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Learning Roadmap
          </h2>

          <p className="text-slate-500 mt-2">
            {roadmap.length} Modules
          </p>

        </div>

        <Route
          className="text-emerald-500"
          size={34}
        />

      </div>

      <div className="mt-8 space-y-4">

        {roadmap.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="flex gap-3 items-center"
          >
            <div className="w-3 h-3 rounded-full bg-emerald-500" />

            <span>
              {item.title}
            </span>
          </div>
        ))}

      </div>

      <button
        onClick={() =>
          navigate("/roadmap", {
            state: { roadmap, flashcards },
          })
        }
        className="mt-8 w-full py-4 rounded-2xl bg-emerald-500 text-white"
      >
        Open Roadmap →
      </button>

    </motion.div>
  );
};

export default RoadmapPreview;