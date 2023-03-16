interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button = ({ children, className, type = 'button', ...props }: Props) => {
  return (
    <button
      className={`w-12 aspect-square rounded-full flex justify-center items-center bg-primary hover:bg-primary/90 duration-150 transition-colors ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
