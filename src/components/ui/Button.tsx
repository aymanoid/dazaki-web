import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  ForwardedRef,
} from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-transparent font-semibold text-white shadow-sm ",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-purple-600 to-rose-600 bg-origin-border hover:from-purple-500 hover:to-rose-500",
        secondary: "bg-black text-white hover:bg-white hover:text-black",
      },
      size: {
        md: "text-base px-4 py-2",
        lg: "px-6 py-3",
        xl: "text-base px-8 py-3 md:px-10 md:py-4 md:text-lg",
      },
    },
    // defaultVariants: {
    //   variant: "default",
    //   size: "md",
    // },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = forwardRef(
  (
    { className, variant, size, ...props },
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);

export default Button;

export interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const LinkButton: FC<LinkButtonProps> = forwardRef(
  (
    { className, variant, size, ...props },
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);

export { LinkButton };
