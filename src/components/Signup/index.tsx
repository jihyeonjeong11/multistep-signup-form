import {
  Card,
  CardContainer,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import CardSidebar from "@/components/ui/CardSidebar";
import FirstForm from "./forms/firstForm";
import SecondForm from "./forms/secondForm";
import ThirdForm from "./forms/thirdForm";
import { AnimatePresence } from "framer-motion";
import MotionDiv from "./MotionDiv";
import useSteps from "@/hooks/useSteps";
import { Button } from "../ui/button";

function Signup() {
  const { currentStep, goNext, goBack, goToIndex } = useSteps(4);

  // 폼 관리 블록

  return (
    <article className="flex items-center justify-center h-screen">
      <CardContainer>
        <CardSidebar goToIndex={goToIndex} />
        <Card>
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <MotionDiv key={currentStep} className="py-4">
                <CardTitle>제목</CardTitle>
                <CardDescription>안녕하세여ㅛ</CardDescription>
                <FirstForm />
              </MotionDiv>
            )}
            {currentStep === 1 && (
              <MotionDiv key={currentStep} className="py-4">
                <CardTitle>제목2</CardTitle>
                <CardDescription>안녕하세여2</CardDescription>
                <SecondForm />
              </MotionDiv>
            )}
            {currentStep === 2 && (
              <MotionDiv key={currentStep} className="py-4">
                <CardTitle>제목3</CardTitle>
                <CardDescription>안녕하세여3</CardDescription>
                <ThirdForm />
              </MotionDiv>
            )}
            {currentStep === 3 && (
              <MotionDiv key={currentStep} className="py-4">
                <CardTitle>성공</CardTitle>
                <CardDescription>성공했습니다</CardDescription>
              </MotionDiv>
            )}
          </AnimatePresence>
          <div>
            <Button onClick={goBack}>뒤로가기</Button>
            <Button onClick={goNext}>다음으로 가기</Button>
          </div>
        </Card>
      </CardContainer>
    </article>
  );
}

export default Signup;
