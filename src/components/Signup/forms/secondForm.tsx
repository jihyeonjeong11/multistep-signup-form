import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../constants";
import type z from "zod/v3";
import DatePicker from "@/_sandbox/DatePicker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function SecondForm() {
  const form = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      birthDate: "",
      gender: "",
    },
  });

  function onSubmit(values: z.infer<typeof step2Schema>) {
    console.log(values, "step 2");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => {
              console.log(field);
              return (
                <FormItem>
                  <FormLabel>생년월일</FormLabel>
                  <FormControl>
                    {/* <Input
                    {...field}
                    className="w-full"
                    placeholder={`${new Date()}`}
                    type="text"
                  /> */}
                    <DatePicker value={field.value} onSelect={field.onChange} />
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
                  <RadioGroup>
                    <RadioGroupItem value={"M"}>남성</RadioGroupItem>
                    <RadioGroupItem value={"F"}>여성</RadioGroupItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}

export default SecondForm;
