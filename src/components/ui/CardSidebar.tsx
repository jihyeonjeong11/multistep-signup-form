import { cn } from "@/utils/utils";
import { Button } from "./button";
import { motion } from "framer-motion";

const STATIC_STEPS = ["계정정보", "개인정보", "소셜연결", "성공"];

// todo: v1 animation
function CardSidebar({
  goToIndex,
  currentStep,
}: {
  goToIndex: (i: number, completed: boolean) => void;
  currentStep: number;
}) {
  return (
    <nav className="md:w-[25%] md:relative w-full mb-4 md:mb-0 p-0 md:p-4 border md:border-none border-accent-green rounded-lg md:mt-0 mt-8">
      <ul className="md:flex-col flex h-full justify-evenly items-center rounded-lg md:border border-gray-500">
        {STATIC_STEPS.map((k, i) => {
          const isActive = currentStep === i;
          const isCompleted = currentStep > i;
          return (
            <motion.li
              key={k + "side"}
              layout
              whileTap={{ scale: 0.95 }}
              className={cn(
                " md:w-auto text-center md:text-left",
                "py-2 md:py-0"
              )}
            >
              <Button
                onClick={() => goToIndex(i, isCompleted)}
                className={cn(
                  "w-full justify-center md:justify-start",
                  "px-4 py-2 rounded-md transition-all duration-300",
                  {
                    "bg-accent-green text-white hover:bg-accent-green font-bold shadow-md":
                      isActive,
                    "bg-transparent text-gray-700 hover:bg-gray-300": !isActive,
                  }
                )}
                variant="ghost"
              >
                <motion.span
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={cn(
                    "text-xs relative",
                    isActive ? "text-white" : "text-gray-700"
                  )}
                >
                  {k}
                  {isActive && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute left-1/2 bottom-[-8px] h-1 w-1 rounded-full bg-white -translate-x-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.span>
              </Button>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CardSidebar;
