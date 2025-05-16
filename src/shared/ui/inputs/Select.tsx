import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import ArrowIcon from './assets/arrow.svg'

export type SelectItem<T> = {
    key: T;
    label: string;
};

type SelectProps<T> = {
    array: SelectItem<T>[];
    setValue: (value: T) => void;
};

export const Select = <T,>({ array, setValue }: SelectProps<T>) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation("filterCategory");
    const [current, setCurrent] = useState<string>(t("default"));
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={selectRef} className="relative w-full min-w-[187px]">
            <div
                onClick={() => setOpen(!open)}
                className={`flex relative justify-between items-center py-[18px] pl-[22px] pr-[40px] rounded-t-[10px] ${
                    open ? "rounded-b-[0]" : "rounded-b-[10px]"
                } cursor-pointer bg-[#1B2133]`}
            >
                <span>{current}</span>
                <img src={ArrowIcon} alt="Arrow" className={`absolute right-[15px] ${open ? "rotate-180" : ""}`} />
            </div>

            {open && (
                <div className="absolute top-full rounded-b-[10px] left-0 w-full bg-[#1B2133] pl-[16px] pr-[32px] z-10 shadow max-h-[180px] overflow-y-scroll custom-scrollbar">
                    {array.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-2 hover:text-[#3657CB] cursor-pointer"
                            onClick={() => {
                                setCurrent(item.label);
                                setValue(item.key);
                                setOpen(false);
                            }}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
