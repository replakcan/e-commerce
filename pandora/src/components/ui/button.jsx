import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"
//TODO butonlar disabled olduğunda text-col değiştir.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 w-fit",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 w-fit",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground w-fit",
        outlineBorder:
          "border border-input border-primary text-primary hover:bg-accent hover:text-accent-foreground w-fit",
        outlineBrRnd:
          "border rounded-full border-input border-primary text-primary hover:bg-accent hover:text-accent-foreground w-fit",
        outlineBrWh:
          "border border-input border-white text-white w-fit",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit",
        ghost: "hover:bg-accent hover:text-accent-foreground w-fit",
        link: "text-primary underline-offset-4 hover:underline w-fit",
        paginationFirst: "border-2 shadow-sm text-primary border-l border-input bg-background hover:bg-accent hover:text-accent-foreground w-fit rounded-l-lg rounded-r-none hover:text-primary",
        paginationNext: "border-2 shadow-sm text-primary border-r border-input bg-background hover:bg-accent hover:text-accent-foreground w-fit rounded-r-lg rounded-l-none",
        paginationCurrent: "border-2 shadow-sm text-primary border-r border-input bg-background hover:bg-accent hover:text-accent-foreground w-fit rounded-none",
        paginationOther: "border-2 shadow-sm text-primary bg-primary text-primary-foreground hover:bg-primary/90 w-fit rounded-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 rounded-full",
        iconsqr: "h-10 w-10 rounded-md",
        pagination: "h-20 px-4 py-2"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
