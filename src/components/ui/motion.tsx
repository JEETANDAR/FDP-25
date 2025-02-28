
import React from "react";
import { cn } from "@/lib/utils";

interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
}

export const motion = {
  div: ({
    className,
    initial,
    animate,
    transition,
    children,
    ...props
  }: MotionProps) => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
      setIsClient(true);
    }, []);

    // Without framer-motion library, we're using CSS animations as a fallback
    // The props like initial, animate are used for documentation but actual animations
    // are handled via CSS classes
    return (
      <div
        className={cn(
          "transition-all duration-500 ease-out",
          isClient ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
};