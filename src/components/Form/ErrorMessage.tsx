interface Props {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return <p className="text-red-500">{children}</p>;
};

export default ErrorMessage;
