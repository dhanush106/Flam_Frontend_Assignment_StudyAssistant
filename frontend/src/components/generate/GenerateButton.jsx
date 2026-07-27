import { Sparkles, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

const GenerateButton = ({
  loading = false,
  disabled = false,
  onClick,
}) => {
  return (
    <motion.button
      type="submit"
      onClick={onClick}
      disabled={loading || disabled}
      whileHover={
        !loading && !disabled
          ? {
              y: -4,
              scale: 1.02,
            }
          : {}
      }
      whileTap={
        !loading && !disabled
          ? {
              scale: 0.98,
            }
          : {}
      }
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

        hover:bg-[position:100%_0]
        hover:shadow-[0_20px_45px_rgba(16,185,129,.28)]

        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {/* Shine Animation */}

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

      {loading ? (
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        >
          <LoaderCircle size={20} />
        </motion.div>
      ) : (
        <motion.div
          animate={{
            rotate: [0, 12, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Sparkles size={20} />
        </motion.div>
      )}

      {/* Text */}

      <span className="relative z-10">
        {loading ? "Generating..." : "Generate"}
      </span>
    </motion.button>
  );
};

export default GenerateButton;