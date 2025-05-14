import Arrow from "./assets/arrow-pagination.svg"
import ArrowMobile from "./assets/arrow-pagination-mobile.svg"


import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";

type SectionPaginationType = {
    currentPage: number;
    changeNumber: (page: number) => void;
    maxPages?: number;
}

export const SectionPagination = ({currentPage, changeNumber, maxPages = 100}: SectionPaginationType) => {

    const breakpoint = useBreakpoint()

    const nextPageHandler = () => {
        if (currentPage !== 100) {
            changeNumber(currentPage + 1);
        }
    }

    const prevPageHandler = () => {
        if (currentPage > 1) {
            changeNumber(currentPage - 1);
        }
    }

    const getPageItems = () => {
        const pages: number[] = [];

        const total = maxPages;

        let start = Math.max(currentPage - 1, 1);
        let end = start + 2;

        if (end > total) {
            end = total;
            start = Math.max(end - 2, 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pagesToShow = getPageItems();

    return (
        <div className="flex items-center justify-center gap-[7px] mt-[66px]">
            <button
                className={`${currentPage > 1 ? "bg-[#1B2133] cursor-pointer hover:opacity-65 transition-all hover:bg-blue-600" : "opacity-50 cursor-no-drop"} phone:w-[73px] w-[50px] h-[50px] phone:h-[73px] rounded-[10px] cursor-pointer flex items-center  justify-center phone:text-[25px] text-[15px] rotate-180`}
                onClick={() => prevPageHandler()}>
                {breakpoint === "phone" ? <img src={ArrowMobile} alt="Arrow Prev"/> : <img src={Arrow} alt="Arrow Prev"/>  }
            </button>

            {pagesToShow.map((page) => (
                <div
                    key={page}
                    onClick={() => changeNumber(page)}
                    className={`phone:w-[73px] w-[50px] h-[50px] phone:h-[73px] rounded-[10px] cursor-pointer flex items-center  justify-center phone:text-[25px] text-[15px] ${
                        currentPage === page && currentPage !== maxPages ? "bg-blue-600 hover:opacity-100" : "bg-[#1B2133] hover:opacity-65 transition-all hover:bg-blue-600"
                    }`}
                >
                    {page}
                </div>
            ))}

            <div
                className="wphone:w-[73px] w-[50px] h-[50px] phone:h-[73px] rounded-[10px] cursor-pointer flex items-center  justify-center phone:text-[25px] text-[15px]]">
                <span>...</span>
            </div>


            <div
                onClick={() => changeNumber(100)}
                className={`phone:w-[73px] w-[50px] h-[50px] phone:h-[73px] rounded-[10px] cursor-pointer flex items-center  justify-center phone:text-[25px] text-[15px] ${
                    currentPage === maxPages ? "bg-blue-600" : "bg-[#1B2133] hover:opacity-65 transition-all hover:bg-blue-600"
                }`}
            >
                {maxPages}
            </div>

            <button
                className={`${currentPage !== maxPages ? "bg-[#1B2133] cursor-pointer hover:opacity-65 transition-all hover:bg-blue-600" : "opacity-50 cursor-no-drop"} phone:w-[73px] w-[50px] h-[50px] phone:h-[73px] rounded-[10px] cursor-pointer flex items-center  justify-center phone:text-[25px] text-[15px]`}
                onClick={() => nextPageHandler()}>
                {breakpoint === "phone" ? <img src={ArrowMobile} alt="Arrow Prev"/> : <img src={Arrow} alt="Arrow Prev"/>  }
            </button>

        </div>
    );
};
