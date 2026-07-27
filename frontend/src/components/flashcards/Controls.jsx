import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Keyboard,
} from "lucide-react";

const buttonAnimation = {
  whileHover: {
    y: -2,
    scale: 1.03,
  },
  whileTap: {
    scale: 0.96,
  },
};

const Controls = ({
  current,
  total,
  flipped,
  onFlip,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="space-y-6">

      {/* Buttons */}

      <div className="flex flex-wrap items-center justify-center gap-5">

        {/* Previous */}

        <motion.button
          {...buttonAnimation}
          onClick={onPrevious}
          disabled={current === 0}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-4
            font-semibold
            text-slate-700
            shadow-sm
            transition
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ArrowLeft size={18} />
          Previous
        </motion.button>

        {/* Flip */}

        <motion.button
          {...buttonAnimation}
          onClick={onFlip}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-indigo-500
            to-sky-500
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
          "
        >
          <RotateCcw size={18} />

          {flipped ? "Show Question" : "Reveal Answer"}
        </motion.button>

        {/* Next */}

        <motion.button
          {...buttonAnimation}
          onClick={onNext}
          disabled={current === total - 1}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-emerald-500
            to-teal-500
            px-6
            py-4
            font-semibold
            text-white
            shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Next
          <ArrowRight size={18} />
        </motion.button>

      </div>

      {/* Keyboard Shortcuts */}

      <div
        className="
          rounded-2xl
          border
          border-white/50
          bg-white/70
          p-5
          backdrop-blur-xl
        "
      >

        <div className="flex items-center justify-center gap-3">

          <Keyboard
            size={20}
            className="text-slate-500"
          />

          <span className="text-sm text-slate-600">
            Keyboard Shortcuts
          </span>

        </div>

        <div
          className="
            mt-4
            flex
            flex-wrap
            justify-center
            gap-5
            text-sm
            text-slate-500
          "
        >

          <Shortcut
            keyName="←"
            action="Previous"
          />

          <Shortcut
            keyName="SPACE"
            action="Flip"
          />

          <Shortcut
            keyName="→"
            action="Next"
          />

        </div>

      </div>

    </div>
  );
};

const Shortcut = ({
  keyName,
  action,
}) => (
  <div className="flex items-center gap-2">

    <kbd
      className="
        rounded-lg
        border
        border-slate-300
        bg-slate-100
        px-3
        py-1
        font-semibold
      "
    >
      {keyName}
    </kbd>

    <span>{action}</span>

  </div>
);

export default Controls;