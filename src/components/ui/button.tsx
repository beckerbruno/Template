import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/utils";
import "./Button.css"; // Importa o arquivo CSS

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const variantClass = `button-${variant}`;
    const sizeClass = `button-${size}`;

    return (
      <Comp
        className={cn("button", variantClass, sizeClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
