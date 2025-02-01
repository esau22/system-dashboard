import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className: string;
}

const Button = ({ label, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "bg-primary text-base px-4 py-2 text-white hover:bg-primary/50 duration-300 ease-out rounded-xl font-semibold",
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
