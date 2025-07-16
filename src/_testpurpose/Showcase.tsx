import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

// 미니멀한 스토리북 컴포넌트 쇼케케이스
function Showcase() {
  return (
    <div className="w-full min-h-screen bg-background-primary p-4 font-noto-sans flex flex-col gap-16">
      <section className="p-2">
        <h1 className="text-3xl ">Buttons</h1>
        <div className="pt-4 flex gap-4">
          <Button variant="primary">Next Step</Button>
          <Button variant="secondary">Go Back</Button>
        </div>
      </section>
      <section className="p-2">
        <h1 className="text-3xl ">Forms</h1>
        <div className="pt-4 flex gap-4"></div>
      </section>
    </div>
  );
}

export default Showcase;
