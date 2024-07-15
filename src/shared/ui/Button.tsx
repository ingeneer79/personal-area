"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <Button
      onClick={() => console.log('hello from child')}
    >
      {children}
    </Button>
  );
};

export default Button;