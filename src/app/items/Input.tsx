'use client'

interface Props {
  name: string;
  label: string;
  id?: string;
  type?: string;
  value?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  placeholder: string;
  required: boolean;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function Input({
  name = '',
  label = '',
  id = '',
  type = 'text',
  required = false,
  defaultValue = '',
  placeholder = '',
  disabled = false,
  onChange
}: Props) {
  return (
    <div className="relative h-12 border-0 text-TText dark:text-TText-light">
      <label
        className="absolute px-2 z-10 -top-1.5 left-2 text-xs font-normal text-TPrimary bg-TBackground"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="block w-full pl-4 h-12 text-grey-3 border-[1px] rounded-lg border-TPrimary appearance-none bg-transparent"
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}