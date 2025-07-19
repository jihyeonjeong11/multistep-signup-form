import {
  Card,
  CardContainer,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import FirstForm from "./forms/firstForm";
import SecondForm from "./forms/secondForm";
import ThirdForm from "./forms/thirdForm";
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

const SIGNUP_FIELDS_BY_STEP = [
  ["id", "email", "password", "passwordConfirm", "phoneNumber"],
  ["birthDate", "gender"],
  [],
];

function Signup() {
  const { currentStep, goNext, goBack, goToIndex } = useSteps(4);

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
    console.log(values, "onsubmit");
    // todo: 비동기
    // 로딩 이후 step === 4
    // 성공 카드
    // todo: 유일한 성공 진입로.
    goToIndex(3, true);
  }

  const handleNextStep = async () => {
    let isValid = true;

    if (currentStep === 0) {
      isValid = await trigger([
        "id",
        "email",
        "password",
        "passwordConfirm",
        "phoneNumber",
      ]);
      if (isValid) {
        goNext();
      } else {
        console.error(errors);
      }
    } else if (currentStep === 1) {
      isValid = await trigger(["gender", "birthDate"]);
      if (isValid) {
        goNext();
      } else {
        console.error(errors);
      }
    }
  };

  // 폼 관리 블록

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
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
                    <FirstForm form={form} />
                  </MotionDiv>
                )}
                {currentStep === 1 && (
                  <MotionDiv key={currentStep} className="py-4">
                    <CardTitle>개인 정보</CardTitle>
                    <CardDescription className="py-2">
                      개인 정보를 입력하세요
                    </CardDescription>
                    <SecondForm form={form} />
                  </MotionDiv>
                )}
                {currentStep === 2 && (
                  <MotionDiv key={currentStep} className="py-4">
                    <CardTitle>소셜</CardTitle>
                    <CardDescription className="py-2">
                      소셜 연동 여부를 확인해주세요
                    </CardDescription>
                    <ThirdForm form={form} />
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
                  <Button onClick={goBack}>뒤로가기</Button>
                  {currentStep === 2 ? (
                    <Button
                      disabled={!isValid}
                      type="submit"
                      variant={"primary"}
                    >
                      등록하기
                    </Button>
                  ) : (
                    <Button
                      variant={"primary"}
                      type={"button"}
                      onClick={handleNextStep}
                    >
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
