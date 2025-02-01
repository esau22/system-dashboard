import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container = ({ children, ...props }: Props) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4")} {...props}>
      {children}
    </div>
  );
};

export default Container;
