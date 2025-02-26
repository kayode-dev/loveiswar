"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useMutation } from "@tanstack/react-query";
import { addToMailingList } from "@/lib/actions";
import { toast } from "@/components/ui/toast";
import Image from "next/image";
import loveIsWarPng from "@/assets/loveIsWarGrunge.gif";

export const addToMailingListSchema = z.object({
  name: z
    .string()
    .min(2, "This name is too short")
    .max(30, "This name is too long"),
  email: z.string().email(),
});

export const MailingListForm = () => {
  const form = useForm<z.infer<typeof addToMailingListSchema>>({
    resolver: zodResolver(addToMailingListSchema),
    defaultValues: { name: "", email: "" },
  });
  const addToList = useMutation({
    mutationFn: addToMailingList,
    onSuccess: () => {
      toast("Thank you for joining!, stay tuned🫶🏾");
      form.reset();
    },
    onError: (err) => {
      toast(err.message);
    },
  });
  const handleSubmit = async ({
    name,
    email,
  }: z.infer<typeof addToMailingListSchema>) => {
    addToList.mutateAsync({ name, email });
  };
  return (
    <Form {...form}>
      <form
        className="md:w-1/2 space-y-8 md:space-y-10 font-[family-name:var(--font-inter)]"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Image
          src={loveIsWarPng}
          alt="love is war by starsamm"
          className="md:w-3/4 mx-auto"
        />
        <div className="flex flex-col gap-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input {...field} placeholder="Email address" type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            disabled={addToList.isPending}
            className="underline underline-offset-4  w-max hover:text-primary duration-300 ease-linear transition-colors self-end h-12 disabled:text-white/40 flex items-center justify-center disabled:opacity-70"
          >
            Stay Informed
          </button>
        </div>
      </form>
    </Form>
  );
};
