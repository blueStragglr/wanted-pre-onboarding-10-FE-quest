import React from "react";

const Input = ({
  formId,
  placeholder,
  register,
  label = null,
  height = null,
  type = null,
}) => {
  return (
    <>
      <div className="input">
        {label && <div className={"label"}>{label}</div>}
        <input
          placeholder={placeholder}
          type={type ? type : "text"}
          {...register(`${formId}`, { required: true })}
        />
      </div>
      <style jsx>{`
        div.input {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
        }
        div.input > input {
          width: 100%;
          height: ${height ? height : "3.75rem"};
          border-radius: 5px;
          border: 1px solid #887e7e;
          padding: 1.1875rem;
          box-sizing: border-box;
        }

        div.input > div.label {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #635c5c;
        }
      `}</style>
    </>
  );
};

export default Input;
