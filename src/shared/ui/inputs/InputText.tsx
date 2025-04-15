import {FieldError, UseFormRegisterReturn} from "react-hook-form";

type InputTextProps = {
    register: UseFormRegisterReturn,
    placeholder?: string,
    type?: "text" | "password" | "email",
    error?: FieldError
}

export const InputText = ({register, error, placeholder = 'Default', type = 'text'}: InputTextProps) => {

    console.log(error)

    const errorStyle = error ? 'outline outline-2 text-red-500 outline-red-500' : 'text-black';

    return (

        <input type={type}
               className={`py-[14px] w-full px-[27px] rounded-[10px] min-w-[425px]  ${errorStyle}`}
               placeholder={placeholder}
               {...register}
        />
    );
};