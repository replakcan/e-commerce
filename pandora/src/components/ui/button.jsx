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
        default: "bg-brilliant text-primary-foreground hover:bg-primary/90 w-fit lg:h-11 lg:rounded-md lg:px-8 lg:text-lg sm:h-9 sm:rounded-md sm:px-3",
        destructive:
          "lg:h-11 lg:rounded-md lg:px-8 lg:text-lg sm:h-9 sm:rounded-md sm:px-3 bg-destructive text-destructive-foreground hover:bg-destructive/90 w-fit",
        outline:
          "lg:h-11 lg:rounded-md lg:px-8 lg:text-lg sm:h-9 sm:rounded-md sm:px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-fit",
        outlineBorder:
          "lg:h-11 lg:rounded-md lg:px-8 lg:text-lg sm:h-9 sm:rounded-md sm:px-3 border border-input border-primary text-primary hover:bg-accent hover:text-accent-foreground w-fit",
        outlineBrRnd:
          "lg:h-11 lg:rounded-md lg:px-8 lg:text-lg sm:h-9 sm:rounded-md sm:px-3 border rounded-full border-input border-primary text-primary hover:bg-accent hover:text-accent-foreground w-fit",
        outlineBrWh:
          "lg:h-11 lg:rounded-md lg:px-8 lg:text-lg sm:h-9 sm:rounded-md sm:px-3 border border-input border-white text-white w-fit",
        secondary:
          "lg:h-11 lg:rounded-md lg:px-8 lg:text-lg sm:h-9 sm:rounded-md sm:px-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit",
        ghost: "lg:h-11 lg:rounded-md lg:px-8 lg:text-lg sm:h-9 sm:rounded-md sm:px-3 hover:bg-accent hover:text-accent-foreground w-fit",
        link: "lg:h-11 lg:rounded-md lg:px-8 lg:text-lg sm:h-9 sm:rounded-md sm:px-3 text-brilliant underline-offset-4 hover:underline hover:text-brilliant w-fit",
        paginationFirst: " border-2 shadow-sm text-brilliant border-l border-input bg-background hover:bg-accent hover:text-accent-foreground w-fit rounded-l-lg rounded-r-none hover:text-brilliant",
        paginationNext: " border-2 shadow-sm text-brilliant border-r border-input bg-background hover:bg-accent hover:text-accent-foreground w-fit rounded-r-lg rounded-l-none",
        paginationCurrent: " border-2 shadow-sm text-brilliant border-r border-input bg-background hover:bg-accent hover:text-accent-foreground w-fit rounded-none",
        paginationOther: " border-2 shadow-sm text-brilliant bg-brilliant text-brilliant-foreground hover:bg-brilliant/90 w-fit rounded-none",
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
