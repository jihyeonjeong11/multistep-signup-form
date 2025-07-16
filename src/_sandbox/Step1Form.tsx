import z from "zod/v3";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export const step1Schema = z
  .object({
    id: z
      .string()
      .min(4, "아이디는 최소 4자 이상이어야 합니다.")
      .max(20, "아이디는 최대 20자 이하여야 합니다.")
      .regex(
        /^[a-zA-Z0-9]+$/,
        "아이디는 영문 소문자, 대문자, 숫자만 사용할 수 있습니다."
      )
      .nonempty("아이디를 입력해 주세요"),

    password: z
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
      .max(30, "비밀번호는 최대 30자 이하여야 합니다.")
      .regex(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).*$/,
        "비밀번호는 영문 대문자, 소문자, 숫자, 특수문자를 각각 1개 이상 포함해야 합니다."
      )
      .nonempty("비밀번호를 입력해 주세요."),

    passwordConfirm: z.string().nonempty("비밀번호 확인을 입력해 주세요."),

    email: z
      .string()
      .email("유효한 이메일 형식이 아닙니다.")
      .nonempty("이메일을 입력해 주세요."),

    phoneNumber: z
      .string()
      .min(10, "전화번호는 최소 10자리 이상이어야 합니다.")
      .max(11, "전화번호는 최대 11자리를 넘을 수 없습니다.")
      .regex(/^\d+$/, "전화번호는 숫자만 입력해 주세요. (하이픈 제외)")
      .nonempty("전화번호를 입력해 주세요."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

function Step1Sandbox() {
  const form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      // 'id' 필드를 스키마에 따라 추가했습니다.
      id: "",
      password: "",
      passwordConfirm: "",
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof step1Schema>) {
    console.log(values, "step 1");
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>아이디</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full"
                    placeholder="아이디를 입력하세요"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full"
                    placeholder="비밀번호를 입력하세요"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full"
                    placeholder="비밀번호를 다시 입력하세요"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full"
                    placeholder="이메일을 입력하세요"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>전화번호</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full"
                    placeholder="하이픈(-) 없이 숫자만 입력하세요"
                    type="tel"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button type="submit" className="mt-4" variant="secondary">
              <span>뒤로가기</span>
            </Button>
            <Button type="submit" className="mt-4" variant="primary">
              <span>등록하기</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Step1Sandbox;
