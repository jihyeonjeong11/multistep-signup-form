import { Input } from "@/components/ui/input";
import { type UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type z from "zod/v3";
import type { signupSchema } from "../constants";

function AccountForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof signupSchema>>;
}) {
  return (
    <div className="flex flex-col gap-4">
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
      <div className="flex gap-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grow">
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
            <FormItem className="grow">
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
      </div>
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
    </div>
  );
}

export default AccountForm;
