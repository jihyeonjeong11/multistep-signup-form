import { useState } from "react";

import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

// 랜딩 페이지

const formVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      ease: "easeOut",
    },
  },
};

function AnimatedDiv({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
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

const FirstForm = () => (
  <AnimatedDiv className="w-[300px] h-[300px] bg-red-200">form1</AnimatedDiv>
);

const SecondForm = () => (
  <AnimatedDiv className="w-[300px] h-[300px] bg-green-200">form2</AnimatedDiv>
);

const ThirdForm = () => (
  <AnimatedDiv className="w-[300px] h-[300px] bg-blue-200">form3</AnimatedDiv>
);

function App() {
  const [step, setStep] = useState(0);

  const goNext = () => {
    if (step < 2) {
      setStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };
  return (
    <div>
      <div className="mb-4 overflow-hidden">
        <div className="w-[500px] h-[500px] border flex">
          <div className="bg-cyan-400 flex flex-col justify-evenly px-2">
            {[1, 2, 3, 4].map((e, i) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    setStep(i);
                  }}
                  key={"control" + i}
                >
                  step {e}
                </button>
              );
            })}
          </div>
          <div className="flex grow bg-amber-200 justify-center items-center">
            <AnimatePresence custom={1} mode="wait">
              {step === 0 && <FirstForm key={"1"} />}
              {step === 1 && <SecondForm key={"2"} />}
              {step === 2 && <ThirdForm key={"3"} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <button onClick={goBack}>go Back</button>
      <button onClick={goNext}>go Next</button>
    </div>
  );
}

export default App;
