import { useState } from "react";

function useSteps(initialSteps: number) {
  const [currentStep, setCurrentStep] = useState(0);

  const goToIndex = (index: number) => {
    // 완료되었을 때만...
    setCurrentStep(index);
  };

  const goNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, initialSteps - 1));
  };

  const goBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  return { currentStep, goToIndex, goNext, goBack };
}

export default useSteps;
