import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full bg-transparent border-b-2 !rounded-none border-b-neutral-700 text-white px-3 py-1 text-base duration-300 ease-in transition-colors placeholder:text-muted-foreground focus-visible:!outline-none focus-visible:border-b-red-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
