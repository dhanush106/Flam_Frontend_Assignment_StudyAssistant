const ModeToggle = ({ mode, setMode }) => {
  return (
    <div className="grid grid-cols-2 rounded-2xl bg-slate-100 p-1.5">

      <button
        type="button"
        onClick={() => setMode("topic")}
        className={`
          rounded-xl
          py-3
          font-semibold
          transition-all
          duration-300
          ${
            mode === "topic"
              ? "bg-white text-slate-900 shadow-md"
              : "text-slate-500 hover:bg-white/60"
          }
        `}
      >
        Topic
      </button>

      <button
        type="button"
        onClick={() => setMode("notes")}
        className={`
          rounded-xl
          py-3
          font-semibold
          transition-all
          duration-300
          ${
            mode === "notes"
              ? "bg-white text-slate-900 shadow-md"
              : "text-slate-500 hover:bg-white/60"
          }
        `}
      >
        Notes
      </button>

    </div>
  );
};

export default ModeToggle;