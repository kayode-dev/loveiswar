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
import loveIsWarPng from "@/assets/love-is-war.png";

export const addToMailingListSchema = z.object({
  name: z
    .string()
    .min(2, "This name is too short")
    .max(30, "This name is too short"),
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
        className="md:w-1/2 space-y-8 font-[family-name:var(--font-inter)]"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Image src={loveIsWarPng} alt="love is war by starsamm" />
        <div className="flex flex-col gap-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Name" className="rounded-lg" />
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
                  <Input
                    {...field}
                    className="rounded-lg"
                    placeholder="Email address"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            disabled={addToList.isPending}
            className="bg-white text-black w-max self-end h-12 disabled:bg-white/40 flex items-center justify-center py-2 px-5 rounded-lg"
          >
            Stay Informed
          </button>
        </div>
      </form>
    </Form>
  );
};
