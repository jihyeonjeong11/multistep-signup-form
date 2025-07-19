import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Input } from "./components/ui/input";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Button } from "./components/ui/button";
import { formVariants } from "./lib/utils";
import Showcase from "./_sandbox/Showcase";
import Signup from "./components/Signup";

// 랜딩 페이지

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

//  아이디, 비밀번호, 이메일, 전화번호 - input, input with email helper
const FirstForm = () => (
  <AnimatedDiv className="w-full h-full p-4">
    id
    <Input />
    password
    <Input />
    password confirm
    <Input />
    email
    <Input />
    mobile
    <Input />
  </AnimatedDiv>
);

// 생년월일, 성별, 나머지 구성은 자유 // ios style date picker, radio
const SecondForm = () => (
  <AnimatedDiv className="w-full h-full p-4">
    생년월일 성별 자유
    <RadioGroup>
      <RadioGroupItem value={"male"}>남성</RadioGroupItem>
      <RadioGroupItem value={"male"}>여성</RadioGroupItem>
    </RadioGroup>
  </AnimatedDiv>
);

// SNS 소설 계정 연결 항목 // dunno. buttons? // 버튼 + 로딩
const ThirdForm = () => (
  <AnimatedDiv className="w-full h-full p-4">소셜 연결</AnimatedDiv>
);

function App() {
  const [step, setStep] = useState(0);
  const [showDevShowcase, setShowDebShowcase] = useState(false);

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

  const devSwitcher = () => {
    setShowDebShowcase((p) => !p);
  };

  if (showDevShowcase) {
    return <Showcase devSwitcher={devSwitcher} />;
  }

  return (
    <div className="w-full min-h-screen">
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" bg-white flex rounded-md">
          <div className=" flex flex-col justify-evenly px-2 border-r-amber-300 border-r-2">
            {["계정 정보", "개인 정보", "소셜 연결"].map((e, i) => {
              return (
                <Button
                  type="button"
                  onClick={() => {
                    setStep(i);
                  }}
                  key={"control" + i}
                >
                  <div>
                    <p>Step {i}</p>
                    <span>{e}</span>
                  </div>
                </Button>
              );
            })}
          </div>
          <div className="flex grow justify-center items-center">
            <AnimatePresence custom={1} mode="wait">
              {step === 0 && <FirstForm key={"1"} />}
              {step === 1 && <SecondForm key={"2"} />}
              {step === 2 && <ThirdForm key={"3"} />}
            </AnimatePresence>
          </div>
        </div>

        <button onClick={goBack}>go Back</button>
        <button onClick={goNext}>go Next</button>
      </div> */}
      {process.env.NODE_ENV === "development" && (
        <Button
          onClick={devSwitcher}
          variant="primary"
          className="fixed right-4 top-4"
        >
          Dev:Check showcases
        </Button>
      )}
      <Signup />
    </div>
  );
}

export default App;
