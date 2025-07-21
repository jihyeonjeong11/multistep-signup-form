import { useCallback, useState } from "react";

function useSteps(initialSteps: number) {
  const [currentStep, setCurrentStep] = useState(0);
  const goToIndex = useCallback(
    (index: number, completed?: boolean) => {
      if ((index === 2 || index === 3) && !completed) return;
      if (currentStep === 3) return;
      setCurrentStep(index);
    },
    [currentStep]
  );

  const goNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, initialSteps - 1));
  }, [initialSteps]);

  const goBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);
  return { currentStep, goToIndex, goNext, goBack };
}

export default useSteps;
