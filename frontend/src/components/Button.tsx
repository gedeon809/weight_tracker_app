import React from "react";

interface ButtonProps {
  onClick: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="border-2 border—green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500
         hover:text-white"
        type="submit"
    >
      {props.title}
    </button>
  );
}

export default Button;
