interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} container mx-auto px-5 sm:px-8 lg:px-10 xl:max-w-screen-xl 2xl:max-w-screen-2xl`}
    >
      {children}
    </div>
  );
};

export default Container;
