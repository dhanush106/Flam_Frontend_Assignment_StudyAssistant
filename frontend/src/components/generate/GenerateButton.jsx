import { Sparkles } from "lucide-react";

const GenerateButton = ({ loading = false }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        group
        relative
        flex
        w-full
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-emerald-500
        via-sky-500
        to-emerald-500
        bg-[length:200%_100%]
        px-6
        py-4
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-1
        hover:bg-[position:100%_0]
        hover:shadow-[0_20px_45px_rgba(16,185,129,.28)]
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {/* Shine Effect */}

      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />

      {/* Icon */}

      <Sparkles
        size={20}
        className="
          transition-transform
          duration-300
          group-hover:rotate-12
          group-hover:scale-110
        "
      />

      <span className="relative">
        {loading ? "Generating..." : "Generate"}
      </span>
    </button>
  );
};

export default GenerateButton;