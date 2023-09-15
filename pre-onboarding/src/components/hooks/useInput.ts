'use client';
import { ChangeEventHandler, useCallback, useState } from 'react';

export interface User {
    id: string;
    password: string;
}

const useInput = (initialValue: User): [User, ChangeEventHandler<HTMLInputElement>, () => void] => {
    const [values, setValues] = useState<User>(initialValue);
    //
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    //
    const reset = useCallback(() => {
        setValues(initialValue);
    }, [initialValue]);

    return [values, onChange, reset];
};

export default useInput;
