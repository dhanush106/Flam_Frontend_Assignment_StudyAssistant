import { motion } from "framer-motion";

const StatsCard = ({
  icon,
  title,
  value,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6"
    >
      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
        {icon}
      </div>

      <h3 className="text-slate-500 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2 text-slate-800">
        {value}
      </p>
    </motion.div>
  );
};

export default StatsCard;