import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  onClick?: () => void;
  className?: string;
}

const ButtonIcon = ({ icon: Icon, className, onClick }: Props) => {
  return (
    <button
      type="button"
      className={cn(
        "p-4 bg-gray-100 rounded-xl text-primary border-2 border-transparent hover:border-primary transition-colors duration-300",
        className
      )}
      onClick={onClick}
    >
      <Icon size={25} />
    </button>
  );
};

export default ButtonIcon;
