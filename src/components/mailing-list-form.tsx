import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const addToMailingListSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});
export const MailingListForm = () => {
  const form = useForm<z.infer<typeof addToMailingListSchema>>({
    resolver: zodResolver(addToMailingListSchema),
    defaultValues: { name: "", email: "" },
  });

  return (
    <Form {...form}>
      <form
        className={cn(
          "md:w-1/2 mx-auto p-4 space-y-4 mt-10 font-[family-name:var(--font-inter)]"
        )}
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button className="bg-white text-black h-10 flex items-center justify-center text-sm py-2 px-4">
            Join The Family
          </button>
        </div>
      </form>
    </Form>
  );
};
