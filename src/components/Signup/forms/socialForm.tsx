import { FormControl, FormField, FormItem } from "@/components/ui/form";
import type { UseFormReturn } from "react-hook-form";
import type z from "zod/v3";
import type { signupSchema } from "../constants";
import { LoaderButton } from "@/components/loader-button";
import KakaoLogo from "@/assets/logo-kakao.svg";
import NaverLogo from "@/assets/logo-naver.png";
import GoogleLogo from "@/assets/logo-google.png";
import useAsyncTaskMock from "@/components/Signup/hooks/useAsyncTaskMock";
import { toast } from "sonner";

function SocialForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof signupSchema>>;
}) {
  const kakao = useAsyncTaskMock();
  const naver = useAsyncTaskMock();
  const google = useAsyncTaskMock();

  return (
    <div className="flex flex-col gap-4">
      <FormField
        control={form.control}
        name="isKakaoConnected"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <LoaderButton
                isLoading={kakao.isLoading}
                disabled={kakao.isLoading || kakao.status === "success"}
                onClick={() =>
                  kakao.mock(
                    () => {
                      form.setValue("isKakaoConnected", true);
                    },
                    () => {
                      toast("연결을 실패했습니다.");
                    }
                  )
                }
                className="w-full border"
                variant="secondary"
              >
                <img width={30} height={30} src={KakaoLogo} alt="kakao" />
                {field.value ? "연동되었습니다" : "kakao 연동하기"}
              </LoaderButton>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="isNaverConnected"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <LoaderButton
                isLoading={naver.isLoading}
                disabled={naver.isLoading || naver.status === "success"}
                onClick={() =>
                  naver.mock(
                    () => {
                      form.setValue("isNaverConnected", true);
                    },
                    () => {
                      toast("연결을 실패했습니다.");
                    }
                  )
                }
                className="w-full border"
                variant="secondary"
              >
                <img width={30} height={30} src={NaverLogo} alt="naver" />
                {field.value ? "연동되었습니다" : "Naver 연동하기"}
              </LoaderButton>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="isGoogleConnected"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <LoaderButton
                isLoading={google.isLoading}
                disabled={google.isLoading || google.status === "success"}
                onClick={() =>
                  google.mock(
                    () => {
                      form.setValue("isGoogleConnected", true);
                    },
                    () => {
                      toast("연결을 실패했습니다.");
                    }
                  )
                }
                className="w-full border"
                variant="secondary"
              >
                <img width={30} height={30} src={GoogleLogo} alt="google" />
                {field.value ? "연동되었습니다" : "Google 연동하기"}
              </LoaderButton>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}

export default SocialForm;
