import { motion } from "framer-motion";

const ModeToggle = ({ mode, setMode }) => {

  return (

    <div className="relative grid grid-cols-2 rounded-2xl bg-slate-100 p-1">

      {mode === "topic" && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-xl bg-white shadow-md"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        />
      )}

      {mode === "notes" && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-y-1 right-1 w-[calc(50%-4px)] rounded-xl bg-white shadow-md"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        />
      )}

      <button
        onClick={() => setMode("topic")}
        className="relative z-10 rounded-xl py-3 font-semibold"
      >
        Topic
      </button>

      <button
        onClick={() => setMode("notes")}
        className="relative z-10 rounded-xl py-3 font-semibold"
      >
        Notes
      </button>

    </div>

  );

};

export default ModeToggle;