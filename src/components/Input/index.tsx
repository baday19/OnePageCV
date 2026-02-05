import type React from "react";


interface InputProps {
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  value: string;
  placeholder?: string;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type = 'text',
  className,
  style,
  value,
  defaultValue = '',
  placeholder = '',
  onChange = () => { }
}: InputProps) => {

  return (
    <input type={type} defaultValue={defaultValue} className={`px-3 py-1 transition-shadow ring-transparent bg-gray-100 outline-none focus:border-gray-400 focus:ring-gray-300/50 focus:ring-2 rounded-md ${className}`} style={style} value={value} onChange={onChange} placeholder={placeholder} />
  );
};


export default Input;