'use client';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type InputProps = {
  name: string;
  type: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};
export default function Input({
  name,
  type = 'text',
  value,
  setValue,
}: InputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-control w-full mb-1">
      <label htmlFor={name} className="label">
        <span className="label-text">{name}</span>
      </label>
      <input
        id={name}
        type={type}
        value={value}
        placeholder="example@email.com"
        className="input input-bordered w-full"
        onChange={handleInputChange}
      />
    </div>
  );
}
