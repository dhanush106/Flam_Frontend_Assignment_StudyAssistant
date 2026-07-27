import { AnimatePresence, motion } from "framer-motion";
import {
  Trophy,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CompletionModal = ({
  open,
  flashcards = [],
}) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/40
            backdrop-blur-sm
            p-6
          "
        >

          <motion.div
            initial={{
              scale: .8,
              y: 50,
            }}
            animate={{
              scale: 1,
              y: 0,
            }}
            exit={{
              scale: .8,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
            className="
              w-full
              max-w-lg
              rounded-[32px]
              bg-white
              p-10
              shadow-2xl
            "
          >

            <motion.div
              animate={{
                rotate: [0,10,-10,0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
                mx-auto
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-amber-100
              "
            >

              <Trophy
                className="text-amber-500"
                size={50}
              />

            </motion.div>

            <h2
              className="
                mt-8
                text-center
                text-4xl
                font-bold
              "
            >
              Roadmap Complete 🎉
            </h2>

            <p
              className="
                mt-5
                text-center
                leading-8
                text-slate-500
              "
            >
              You've completed every learning module.

              Now reinforce your knowledge by
              practicing the generated flashcards.
            </p>

            <button
              onClick={() =>
                navigate("/flashcards", {
                  state: {
                    flashcards,
                  },
                })
              }
              className="
                mt-10
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-emerald-500
                to-sky-500
                py-4
                text-lg
                font-semibold
                text-white
              "
            >
              <Sparkles size={20} />

              Start Flashcards

              <ArrowRight size={20} />

            </button>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default CompletionModal;