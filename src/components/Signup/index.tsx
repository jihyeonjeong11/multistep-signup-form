import {
  Card,
  CardContainer,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { AnimatePresence } from "framer-motion";
import useSteps from "@/components/Signup/hooks/useSteps";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { INITIAL_FORM_DATA, signupSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod/v3";
import { Form } from "../ui/form";
import CardSidebar from "../ui/cardSidebar";
import useAsyncTaskMock from "@/components/Signup/hooks/useAsyncTaskMock";
import { LoaderButton } from "../loader-button";
import AccountForm from "./forms/accountForm";
import PrivateForm from "./forms/privateForm";
import SocialForm from "./forms/socialForm";
import { toast } from "sonner";
import LottieComp from "../Lottie";
import CardAnimationDiv from "./CardAnimationDiv";

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
      return;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center h-screen">
          <CardContainer className="items-stretch">
            <CardSidebar goToIndex={goToIndex} currentStep={currentStep} />
            <Card className="justify-between flex flex-col items-stretch p-4">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <CardAnimationDiv key={currentStep} className="py-4">
                    <CardTitle>계정 정보</CardTitle>
                    <CardDescription className="py-2">
                      계정 필수 정보를 입력하세요
                    </CardDescription>
                    <AccountForm form={form} />
                  </CardAnimationDiv>
                )}
                {currentStep === 1 && (
                  <CardAnimationDiv key={currentStep} className="py-4">
                    <CardTitle>개인 정보</CardTitle>
                    <CardDescription className="py-2">
                      개인 정보를 입력하세요
                    </CardDescription>
                    <PrivateForm form={form} />
                  </CardAnimationDiv>
                )}
                {currentStep === 2 && (
                  <CardAnimationDiv key={currentStep} className="py-4">
                    <CardTitle>소셜</CardTitle>
                    <CardDescription className="py-2">
                      소셜 연동 여부를 확인해주세요
                    </CardDescription>
                    <SocialForm form={form} />
                  </CardAnimationDiv>
                )}
                {currentStep === 3 && (
                  <CardAnimationDiv
                    key={currentStep}
                    className="w-full h-full justify-center items-center flex flex-col"
                  >
                    <LottieComp />
                    <CardDescription>성공했습니다</CardDescription>
                  </CardAnimationDiv>
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
                      type="submit"
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
