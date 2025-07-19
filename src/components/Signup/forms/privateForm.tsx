import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import DatePicker from "@/_sandbox/DatePicker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { UseFormReturn } from "react-hook-form";
import type z from "zod/v3";
import type { signupSchema } from "../constants";

function PrivateForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof signupSchema>>;
}) {
  return (
    <div className="flex flex-col gap-4">
      <FormField
        control={form.control}
        name="birthDate"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>생년월일</FormLabel>
              <FormControl>
                <DatePicker
                  selected={field.value ? new Date(field.value) : undefined}
                  onSelect={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel>성별</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-1 mt-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="m" />
                  </FormControl>
                  <FormLabel className="font-normal">남성</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="f" />
                  </FormControl>
                  <FormLabel className="font-normal">여성</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default PrivateForm;
