import { FormControl, FormField, FormItem } from "@/components/ui/form";
import type { UseFormReturn } from "react-hook-form";
import type z from "zod/v3";
import type { signupSchema } from "../constants";
import useSocialConnectionMock from "@/hooks/useSocialConnectMock";
import { LoaderButton } from "@/components/loader-button";
import KakaoLogo from "@/assets/logo-kakao.svg";
import NaverLogo from "@/assets/logo-naver.png";
import GoogleLogo from "@/assets/logo-google.png";

function ThirdForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof signupSchema>>;
}) {
  const kakao = useSocialConnectionMock();
  const naver = useSocialConnectionMock();
  const google = useSocialConnectionMock();

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
                  kakao.socialMock(
                    () => {
                      form.setValue("isKakaoConnected", true);
                    },
                    () => null
                  )
                }
                className="w-full border"
                type="button"
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
                  naver.socialMock(
                    () => {
                      form.setValue("isNaverConnected", true);
                    },
                    () => null
                  )
                }
                className="w-full border"
                type="button"
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
                  google.socialMock(
                    () => {
                      form.setValue("isGoogleConnected", true);
                    },
                    () => null
                  )
                }
                className="w-full border"
                type="button"
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

export default ThirdForm;
