import {ReactNode, useState} from "react";

type CheckboxPropsType = {
    children: ReactNode
}

export const Checkbox = ({children}: CheckboxPropsType) => {

    const [checked, setChecked] = useState<boolean>(false)
    return (
        <label className="inline-flex items-center space-x-2 cursor-pointer select-none">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="peer hidden"
            />
            <div
                className="w-6 h-6 border-2 border-[#F2F60F]  rounded-[2px] peer-checked:bg-accentButtonColor peer-checked:border-[#F2F60F] flex items-center justify-center transition-colors duration-200">
                <svg
                    className={`w-4 h-4 text-black transition-opacity duration-200 ${
                        checked ? "opacity-100" : "opacity-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
            </div>

            {children}

        </label>
    );
};