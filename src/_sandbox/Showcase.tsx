import { Button } from "../components/ui/button";
import FormCard from "./FormCard";

// 미니멀한 스토리북 컴포넌트 쇼케케이스
function Showcase({ devSwitcher }: { devSwitcher: () => void }) {
  return (
    <div className="w-full min-h-screen bg-background-primary p-4 font-noto-sans flex flex-col gap-16">
      <section className="p-2">
        <h1 className="text-3xl ">Buttons</h1>
        <div className="pt-4 flex gap-4">
          <Button variant="primary">다음으로</Button>
          <Button variant="secondary">돌아가기</Button>
        </div>
      </section>
      <section className="p-2">
        <h1 className="text-3xl">Forms</h1>
        <div className="pt-4 flex gap-4">{/* <Step1Sandbox /> */}</div>
      </section>
      <section className="p-2">
        <h1 className="text-3xl">Card</h1>
        <div className="pt-4 flex gap-4">
          <FormCard />
        </div>
      </section>
      <section className="p-2">
        <h1 className="text-3xl">Date-picker</h1>
        <div className="pt-4 flex gap-4"></div>
      </section>
      {process.env.NODE_ENV === "development" && (
        <Button
          onClick={devSwitcher}
          variant="primary"
          className="fixed right-4 top-4"
        >
          Dev:Go back to app
        </Button>
      )}
    </div>
  );
}

export default Showcase;
