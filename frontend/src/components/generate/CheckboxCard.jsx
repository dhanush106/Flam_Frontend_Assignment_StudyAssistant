import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CheckboxCard = ({
  checked,
  onChange,
  title
}) => {

  return (

    <motion.div

      whileHover={{
        y: -4,
        scale: 1.02
      }}

      whileTap={{
        scale: .98
      }}

      onClick={onChange}

      className={`
        cursor-pointer
        rounded-2xl
        border
        p-5
        transition

        ${
          checked

          ? "border-emerald-500 bg-emerald-50"

          : "border-slate-200 bg-white"

        }
      `}

    >

      <div className="flex items-center justify-between">

        <span className="font-medium">

          {title}

        </span>

        <motion.div

          animate={{
            scale: checked ? 1 : .6,
            opacity: checked ? 1 : 0
          }}

        >

          <Check
            className="text-emerald-500"
          />

        </motion.div>

      </div>

    </motion.div>

  );

};

export default CheckboxCard;