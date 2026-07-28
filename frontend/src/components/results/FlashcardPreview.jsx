import { Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FlashcardsPreview = ({ flashcards }) => {

  const navigate = useNavigate();

  if (!flashcards?.length) return null;

  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="bg-white rounded-3xl border border-slate-100 p-8"
    >
      <div className="flex justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Flashcards
          </h2>

          <p className="text-slate-500 mt-2">
            {flashcards.length} Cards
          </p>

        </div>

        <Brain
          className="text-sky-500"
          size={34}
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        {flashcards.slice(0, 5).map((card) => (
          <div
            key={card.id}
            className="px-4 py-2 rounded-full bg-sky-100"
          >
            {card.topic}
          </div>
        ))}

      </div>

      <button
        onClick={() =>
          navigate("/flashcards", {
            state: { flashcards },
          })
        }
        className="mt-8 w-full py-4 rounded-2xl bg-sky-500 text-white"
      >
        Practice Flashcards →
      </button>

    </motion.div>
  );
};

export default FlashcardsPreview;