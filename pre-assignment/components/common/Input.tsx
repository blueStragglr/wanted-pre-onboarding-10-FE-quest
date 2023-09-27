interface IInputProps {
  type: HTMLInputElement["type"];
  name: string;
  placeholder: string;
  label: string;
  [options: string]: any;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  name,
  placeholder,
  label,
  onChange,
}: IInputProps) {
  return (
    <div className="flex p-2">
      <label htmlFor={name} className="p-2 w-[15%]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="flex-grow text-black px-2 placeholder:px-2 focus:outline-1 focus:outline-green-500 focus:shadow-sm"
        onChange={onChange}
      />
    </div>
  );
}
