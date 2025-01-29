import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const addToMailingListSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});
export const MailingListForm = () => {
  const form = useForm<z.infer<typeof addToMailingListSchema>>({
    resolver: zodResolver(addToMailingListSchema),
    defaultValues: { firstName: "", lastName: "", email: "" },
  });

  return (
    <Form {...form}>
      <form
        className={cn(
          "md:w-1/2 mx-auto p-4 space-y-4 mt-10 font-[family-name:var(--font-inter)]"
        )}
      >
        <FormField
          name="firstName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="First Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="lastName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Last Name" />
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
          <button className="bg-white text-black h-9 flex items-center justify-center text-sm py-2 px-4">
            Join
          </button>
        </div>
      </form>
    </Form>
  );
};
