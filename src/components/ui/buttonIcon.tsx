import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  className?: string;
}

const ButtonIcon = ({ icon: Icon, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "p-4 bg-gray-100 rounded-xl text-primary border-2 border-transparent hover:border-primary transition-colors duration-300",
        className
      )}
      {...props}
    >
      <Icon size={25} />
    </button>
  );
};

export default ButtonIcon;
