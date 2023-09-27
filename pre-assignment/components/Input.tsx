interface IInputProps {
  type: HTMLInputElement["type"];
  name: string;
  placeholder: string;
  label: string;
  [options: string]: any;
}

export default function Input({ type, name, placeholder, label }: IInputProps) {
  return (
    <div className="flex p-2">
      <label htmlFor={name} className="p-2 w-[15%]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="flex-grow"
      />
    </div>
  );
}
