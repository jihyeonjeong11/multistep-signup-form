import { formVariants } from "@/lib/utils";
import { motion } from "framer-motion";

function MotionDiv({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
