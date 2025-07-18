import { Button } from "../ui/button";
import FirstForm from "./forms/firstForm";
import SecondForm from "./forms/secondForm";
import ThirdForm from "./forms/thirdForm";
import { AnimatePresence } from "framer-motion";

function FormWrapper({ step }: { step: number }) {
  return (
    <AnimatePresence mode="wait">
      <div className="grow p-2 h-full">
        {step === 0 && <FirstForm />}
        {step === 1 && <SecondForm />}
        {step === 2 && <ThirdForm />}
        {step === 3 && <>completed</>}
        {step !== 3 && (
          <div className="flex justify-between items-end">
            <Button type="submit" className="mt-4" variant="secondary">
              <span>뒤로가기</span>
            </Button>
            <Button type="submit" className="mt-4" variant="primary">
              <span>등록하기</span>
            </Button>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}

export default FormWrapper;
