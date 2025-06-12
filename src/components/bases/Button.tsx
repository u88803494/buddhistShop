interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="h-[35px] w-40 text-[#A29380] border border-[#A29380]" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
