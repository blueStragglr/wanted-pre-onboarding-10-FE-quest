import { EErrorNo, errorMsgMap } from "@Constants/errorKeyValue";
import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

type ValueType<T extends number | string> = T extends number ? number : string;

export interface UseInputReturn<T extends number | string> {
  value: T;
  isError: boolean;
  errorMsg: string;
  errorNo: EErrorNo;
  setErrorNo: Dispatch<SetStateAction<EErrorNo>>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export interface UseInputProps<T extends number | string> {
  defaultValue: T;
  validationFn: (value: ValueType<T>) => EErrorNo;
}

export function useInput<T extends number | string>({
  defaultValue,
  validationFn,
}: UseInputProps<T>) {
  const [input, setInput] = useState(defaultValue);
  const [errorNo, setErrno] = useState(EErrorNo.NO_ERROR);
  const validationFnRef = useRef(validationFn);

  const isError = useMemo(() => errorNo !== EErrorNo.NO_ERROR, [errorNo]);
  const errorMsg = useMemo(() => {
    const msg = errorMsgMap.get(errorNo);
    return msg ? msg : "알 수 없는 에러";
  }, [errorNo]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const targetValueStr = e.target.value;
      const targetValue =
        typeof input === "number" ? parseInt(targetValueStr) : targetValueStr;

      const newErrorNo = validationFnRef.current(targetValue as ValueType<T>);
      setErrno(newErrorNo);
      if (newErrorNo === EErrorNo.NO_ERROR) {
        setInput(targetValue as T);
      }
    },
    [input]
  );

  const ret: UseInputReturn<T> = {
    value: input,
    errorNo: errorNo,
    isError: isError,
    errorMsg: errorMsg,
    setErrorNo: setErrno,
    handleChange: handleChange,
  };

  return ret;
}
