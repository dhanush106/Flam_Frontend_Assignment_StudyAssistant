import { motion } from "framer-motion";
import { HelpCircle, Lightbulb } from "lucide-react";

const Flashcard = ({
  flashcard,
  flipped,
  onFlip,
}) => {
  if (!flashcard) return null;

  return (
    <div
      className="perspective w-full max-w-4xl"
      onClick={onFlip}
    >
      <motion.div
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
        whileHover={{
          scale: 1.01,
        }}
        className="
          relative
          h-[430px]
          cursor-pointer
          preserve-3d
        "
      >

        {/* FRONT */}

        <div
          className="
            absolute
            inset-0
            backface-hidden
            rounded-[36px]
            border
            border-white/50
            bg-white/80
            backdrop-blur-xl
            shadow-xl
            overflow-hidden
          "
        >

          {/* Gradient */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-3
              bg-gradient-to-r
              from-sky-500
              via-indigo-500
              to-emerald-500
            "
          />

          <div
            className="
              flex
              h-full
              flex-col
              justify-between
              p-10
            "
          >

            <div className="flex items-center gap-3">

              <HelpCircle
                size={24}
                className="text-sky-500"
              />

              <span
                className="
                  rounded-full
                  bg-sky-100
                  px-4
                  py-1
                  text-sm
                  font-semibold
                  text-sky-700
                "
              >
                Question
              </span>

            </div>

            <div
              className="
                flex-1
                flex
                items-center
                justify-center
                text-center
              "
            >

              <h2
                className="
                  text-4xl
                  font-bold
                  leading-relaxed
                  text-slate-800
                "
              >
                {flashcard.question}
              </h2>

            </div>

            <div
              className="
                text-center
                text-slate-400
                text-sm
              "
            >
              Click anywhere or press SPACE to reveal
            </div>

          </div>

        </div>

        {/* BACK */}

        <div
          className="
            absolute
            inset-0
            rotate-y-180
            backface-hidden
            rounded-[36px]
            bg-gradient-to-br
            from-emerald-500
            via-sky-500
            to-indigo-600
            text-white
            shadow-xl
            overflow-hidden
          "
        >

          <div
            className="
              flex
              h-full
              flex-col
              justify-between
              p-10
            "
          >

            <div className="flex items-center gap-3">

              <Lightbulb size={24} />

              <span
                className="
                  rounded-full
                  bg-white/20
                  px-4
                  py-1
                  text-sm
                  font-semibold
                "
              >
                Answer
              </span>

            </div>

            <div
              className="
                flex-1
                flex
                items-center
                justify-center
                text-center
              "
            >

              <p
                className="
                  text-3xl
                  leading-relaxed
                  font-medium
                "
              >
                {flashcard.answer}
              </p>

            </div>

            <div
              className="
                text-center
                text-white/80
                text-sm"
              >
              Click to flip back
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default Flashcard;