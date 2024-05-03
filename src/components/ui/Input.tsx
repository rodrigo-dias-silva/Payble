import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

export default function Input({ ...rest }: Props) {
  return (
    <input
      type="text"
      className="w-full mb-4 h-10 rounded-lg bg-dark-900 text-slate-500 px-4 border border-gray-500 placeholder:text-slate-700 placeholder:opacity-50"
      {...rest}
    />
  )
}