import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-sm", {
  variants: {
    variant: {
      default: "border-transparent bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-md hover:shadow-primary/25",
      secondary: "border-transparent bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground hover:shadow-md hover:shadow-secondary/25",
      destructive: "border-transparent bg-gradient-to-r from-destructive to-destructive/90 text-destructive-foreground hover:shadow-md hover:shadow-destructive/25",
      outline: "text-foreground border-border hover:bg-accent/50",
      warning: "border-transparent bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-md hover:shadow-amber-500/25",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
