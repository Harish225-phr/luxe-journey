import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero:
          "relative overflow-hidden border border-primary/20 bg-primary text-primary-foreground shadow-[0_18px_50px_-18px_var(--color-primary)] before:absolute before:inset-y-0 before:left-[-120%] before:w-24 before:skew-x-[-24deg] before:bg-white/35 before:transition-transform before:duration-700 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_var(--color-primary)] hover:before:translate-x-[520%]",
        glass:
          "border border-white/25 bg-white/10 text-white shadow-[0_18px_50px_-18px_rgba(8,26,58,0.45)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/18",
        outlineLuxury:
          "border border-[color:var(--color-brand-gold)]/45 bg-transparent text-[color:var(--color-brand-navy)] shadow-sm hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-gold)]/10",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        hero: "h-12 rounded-2xl px-6 text-sm font-semibold sm:h-13 sm:px-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
