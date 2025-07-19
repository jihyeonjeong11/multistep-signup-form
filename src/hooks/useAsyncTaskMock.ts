import type { SocialConnectionStatus } from "@/types/types";
import { useCallback, useState } from "react";

function useAsyncTaskMock() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<SocialConnectionStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const mock = useCallback(
    async (onSuccess: () => void, onError: () => void) => {
      setIsLoading(true);
      setStatus("idle");
      setError(null);

      try {
        const delay = Math.floor(Math.random() * 1000) + 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));

        const success = Math.random() > 0.5;

        if (success) {
          setStatus("success");
          onSuccess();
        } else {
          setStatus("failure");
          setError("소셜 연결에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (err) {
        setStatus("failure");
        onError();
        setError("예상치 못한 오류가 발생했습니다.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { mock, isLoading, status, error };
}

export default useAsyncTaskMock;
