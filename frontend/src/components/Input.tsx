import React from "react";

interface InputProps {
  icon: JSX.Element;
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

function TextInput(props: InputProps) {
  return (
    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
      {props.icon}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="bg-gray-100 outline-none text-sm flex-1"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextInput;
