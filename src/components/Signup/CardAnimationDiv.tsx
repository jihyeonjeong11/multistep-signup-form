import { formVariants } from "@/utils/utils";
import { motion } from "framer-motion";

function CardAnimationDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default CardAnimationDiv;
