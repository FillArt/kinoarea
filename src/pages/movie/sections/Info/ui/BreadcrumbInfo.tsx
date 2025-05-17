import {NavLink} from "react-router-dom";
import Arrow from "@/pages/category/section/CategoryTitle/assets/arrow.svg";
import {lowercaseFirstLetter} from "@/shared/helpers/lowercaseFirstLetter.ts";
import {capitalizeFirstLetter} from "@/shared/helpers/capitalizeFirstLetter.ts";

type BreadcrumbInfoProps = {
    category: string;
    title: string;
}

export const BreadcrumbInfo = ({category, title}: BreadcrumbInfoProps) => {
    return (
        <div className="text-[16px] flex gap-[10px]">
            <NavLink className="text-[#4F5B7C] font-bold hover:text-blue-600 transition-all" to="/">Home</NavLink>
            <img src={Arrow} alt="decor"/>
            <NavLink className="text-[#4F5B7C] font-bold hover:text-blue-600 transition-all" to={`/category/${lowercaseFirstLetter(category)}`}> { capitalizeFirstLetter(category)}</NavLink>
            <img src={Arrow} alt="decor"/>
            <span className="font-bold">{title}</span>
        </div>
    );
};

