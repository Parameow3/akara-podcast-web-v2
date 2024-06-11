import { cn } from "@/libs/utils";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Box: React.FC<Props> = ({ children, className }) => (
  <div className={cn("bg-neutral-900 rounded-lg h-fit w-full", className)}>
    {children}
  </div>
);
