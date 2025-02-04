import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useMutation } from "@tanstack/react-query";
import { addToMailingList } from "@/lib/actions";
import { toast } from "@/components/ui/toast";

export const addToMailingListSchema = z.object({
  name: z.string(),
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
        className="md:w-3/4 space-y-4 mt-5 font-[family-name:var(--font-inter)]"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
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
        <div className="flex items-end">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    className="flex-1 w-full"
                    placeholder="Email address"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button className="bg-white text-black h-10 flex items-center justify-center text-sm py-2 px-4">
            Join
          </button>
        </div>
      </form>
    </Form>
  );
};
