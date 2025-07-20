import Lottie, { type AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";
import * as CheckAnimation from "@/assets/Checkmark.json";

const DEFAULT_LOTTIE_OPTIONS = {
  container: null,
  loop: false,
  autoplay: true,
  animationData: null,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

// todo: 재사용 가능하게 만들기. method 다 추가해서 템플릿에 추가하기.

function LottieComp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<AnimationItem>(null);
  // todo: json 핸들링 꼭 필요했었는지?
  const clonedAnimationData = JSON.parse(JSON.stringify(CheckAnimation));

  useEffect(() => {
    if (containerRef.current) {
      lottieInstance.current = Lottie.loadAnimation({
        ...DEFAULT_LOTTIE_OPTIONS,
        container: containerRef.current,
        animationData: clonedAnimationData,
      });

      lottieInstance.current!.play();
    }

    // cleanup을 위한 useEffect.
    return () => {
      if (lottieInstance.current) {
        lottieInstance.current.destroy();
        console.log("Lottie 애니메이션 파괴됨.");
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} style={{ width: 200, height: 200 }} />;
}
export default LottieComp;
