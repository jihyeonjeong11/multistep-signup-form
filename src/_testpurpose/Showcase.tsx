// 미니멀한 스토리북 컴포넌트 쇼케케이스
function Showcase() {
  return (
    <div className="w-full min-h-screen text-white">
      <section className="p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl">Buttons</h1>
        <div className="pt-4 flex flex-col gap-4">
          <button className="">Next Step</button>
          <button className="">Go Back</button>
        </div>
      </section>
    </div>
  );
}

export default Showcase;
