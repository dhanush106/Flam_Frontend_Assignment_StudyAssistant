import { motion } from "framer-motion";

const SummaryCard = ({ summary }) => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
    >
      <h2 className="text-2xl font-semibold mb-5">
        AI Summary
      </h2>

      <p className="leading-8 text-slate-600">
        {summary}
      </p>
    </motion.div>
  );
};

export default SummaryCard;