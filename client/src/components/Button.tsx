import React from "react";

type propsType = {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
};
const Button = (props: propsType) => {
  const { label, type = "button", onClick, className, icon } = props;
  return (
    <button
      type={type}
      className={`font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center ${className}`}
      onClick={onClick}
    >
      {icon} {label}
    </button>
  );
};

export default Button;
