import { useState } from "react";
import {
  Card,
  CardContainer,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardSidebar from "@/components/ui/CardSidebar";
import FirstForm from "./forms/firstForm";
import SecondForm from "./forms/secondForm";
import ThirdForm from "./forms/thirdForm";
import { AnimatePresence } from "framer-motion";
import FormWrapper from "./FormWrapper";

function Signup() {
  const [step, setStep] = useState(0);

  const goToIndex = (i: number, completed: boolean) => {
    if (completed) setStep(i);
  };
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
    <article className="flex items-center justify-center h-screen">
      <CardContainer>
        <CardSidebar goToIndex={goToIndex} />
        <FormWrapper step={step} />
      </CardContainer>
    </article>
  );
}

export default Signup;

// <Card>

//   <CardHeader>
//     <CardTitle>개인 정보</CardTitle>
//     <CardDescription>개인 정보를 입력해 주세요.</CardDescription>
//   </CardHeader>
//   <div className="p-4">{/* <Step1Sandbox /> */}</div>
// </Card>
