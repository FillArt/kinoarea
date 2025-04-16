import {FieldError, UseFormRegisterReturn} from "react-hook-form";

type InputTextProps = {
    register: UseFormRegisterReturn,
    placeholder?: string,
    type?: "text" | "password" | "email",
    error?: FieldError
}

export const InputText = ({register, error, placeholder = 'Default', type = 'text'}: InputTextProps) => {

    console.log(error)

    const errorStyle = error ? 'outline outline-2 outline-red-500' : '';

    return (

        <input type={type}
               className={`phone:py-[14px] py-[9px] w-full px-[27px] rounded-[10px] text-black phone:min-w-[425px]  ${errorStyle}`}
               placeholder={placeholder}
               {...register}
        />
    );
};