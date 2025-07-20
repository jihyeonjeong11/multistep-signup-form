import {
  Card,
  CardContainer,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { AnimatePresence } from "framer-motion";
import MotionDiv from "./MotionDiv";
import useSteps from "@/hooks/useSteps";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { INITIAL_FORM_DATA, signupSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod/v3";
import { Form } from "../ui/form";
import CardSidebar from "../ui/CardSidebar";
import useAsyncTaskMock from "@/hooks/useAsyncTaskMock";
import { LoaderButton } from "../loader-button";
import AccountForm from "./forms/accountForm";
import PrivateForm from "./forms/privateForm";
import SocialForm from "./forms/socialForm";
import { toast } from "sonner";
import LottieComp from "../Lottie";

const step1Conditions = [
  "id",
  "email",
  "password",
  "passwordConfirm",
  "phoneNumber",
] as const;

const step2Conditions = ["gender", "birthDate"] as const;

function Signup() {
  const { currentStep, goNext, goBack, goToIndex } = useSteps(4);
  const { isLoading, mock } = useAsyncTaskMock();

  const form = useForm<z.infer<typeof signupSchema>>({
    defaultValues: INITIAL_FORM_DATA,
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = form;

  function onSubmit(values: z.infer<typeof signupSchema>) {
    // submit
    console.table(values);
    mock(
      () => {
        goNext();
      },
      () => {
        toast("가입에 실패했습니다. 인터넷 연결을 확인해주세요.");
      }
    );
  }

  const handleNextStep = async () => {
    let isValid = true;

    if (currentStep === 0) {
      isValid = await trigger(step1Conditions);
      if (isValid) {
        goNext();
      } else {
        toast("계정 정보를 완료해주세요");
        console.error(errors);
      }
    } else if (currentStep === 1) {
      isValid = await trigger([...step1Conditions, ...step2Conditions]);
      if (isValid) {
        goNext();
      } else {
        toast("개인 정보를 완료해주세요");
        console.error(errors);
      }
    } else if (currentStep === 2) {
      handleSubmit(onSubmit)();
    }
  };

  // 폼 관리 블록

  return (
    <div className="flex items-center justify-center h-screen">
      <CardContainer className="items-stretch">
        <CardSidebar goToIndex={goToIndex} currentStep={currentStep} />
        <Card className="justify-between flex flex-col items-stretch p-4">
          <MotionDiv
            key={currentStep}
            className="py-4 w-full h-full justify-center items-center flex flex-col gap-2"
          >
            <LottieComp />
            <CardTitle>회원가입이 끝났습니다!</CardTitle>
          </MotionDiv>
        </Card>
      </CardContainer>
    </div>
  );

  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center justify-center h-screen">
          <CardContainer className="items-stretch">
            <CardSidebar goToIndex={goToIndex} currentStep={currentStep} />
            <Card className="justify-between flex flex-col items-stretch p-4">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <MotionDiv key={currentStep} className="py-4">
                    <CardTitle>계정 정보</CardTitle>
                    <CardDescription className="py-2">
                      계정 필수 정보를 입력하세요
                    </CardDescription>
                    <AccountForm form={form} />
                  </MotionDiv>
                )}
                {currentStep === 1 && (
                  <MotionDiv key={currentStep} className="py-4">
                    <CardTitle>개인 정보</CardTitle>
                    <CardDescription className="py-2">
                      개인 정보를 입력하세요
                    </CardDescription>
                    <PrivateForm form={form} />
                  </MotionDiv>
                )}
                {currentStep === 2 && (
                  <MotionDiv key={currentStep} className="py-4">
                    <CardTitle>소셜</CardTitle>
                    <CardDescription className="py-2">
                      소셜 연동 여부를 확인해주세요
                    </CardDescription>
                    <SocialForm form={form} />
                  </MotionDiv>
                )}
                {currentStep === 3 && (
                  <MotionDiv key={currentStep} className="py-4">
                    <CardTitle>성공</CardTitle>
                    <CardDescription>성공했습니다</CardDescription>
                  </MotionDiv>
                )}
              </AnimatePresence>
              {currentStep !== 3 && (
                <div className="flex justify-between">
                  {currentStep > 0 && (
                    <Button onClick={goBack}>뒤로가기</Button>
                  )}
                  {currentStep === 2 ? (
                    <LoaderButton
                      disabled={!isValid || isLoading}
                      isLoading={isLoading}
                      variant="primary"
                      onClick={handleNextStep}
                    >
                      등록하기
                    </LoaderButton>
                  ) : (
                    <Button variant="primary" onClick={handleNextStep}>
                      다음으로 가기
                    </Button>
                  )}
                </div>
              )}
            </Card>
          </CardContainer>
        </div>
      </form>
    </Form>
  );
}

export default Signup;
