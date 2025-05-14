import Arrow from "./assets/arrow-pagination.svg"

type SectionPaginationType = {
    currentPage: number;
    changeNumber: (page: number) => void;
}

export const SectionPagination = ({currentPage, changeNumber}: SectionPaginationType) => {

    const nextPageHandler = () => {
        if(currentPage !== 100) {
            changeNumber(currentPage + 1);
        }
    }

    const prevPageHandler = () => {
        if(currentPage > 1) {
            changeNumber(currentPage - 1);
        }
    }

    const getPageItems = () => {
        const pages: number[] = [];

        const total = 100;

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
                className={`${currentPage > 1 ? "bg-[#1B2133] cursor-pointer" : "opacity-50 cursor-no-drop"} w-[73px] h-[73px] rounded-[10px] flex items-center justify-center text-[25px] rotate-180`}
                onClick={() => prevPageHandler()}>
                <img src={Arrow} alt="Arrow Prev"/>
            </button>

            {pagesToShow.map((page) => (
                <div
                    key={page}
                    onClick={() => changeNumber(page)}
                    className={`w-[73px] h-[73px] rounded-[10px] cursor-pointer flex items-center justify-center text-[25px] ${
                        currentPage === page && currentPage !== 100 ? "bg-blue-600" : "bg-[#1B2133]"
                    }`}
                >
                    {page}
                </div>
            ))}

            <div className="w-[73px] h-[73px] rounded-[10px] cursor-pointer flex items-center justify-center text-[25px]">
                <span>...</span>
            </div>


            <div
                onClick={() => changeNumber(100)}
                className={`w-[73px] h-[73px] rounded-[10px] cursor-pointer flex items-center justify-center text-[25px] ${
                    currentPage === 100 ? "bg-blue-600" : "bg-[#1B2133]"
                }`}
            >
                100
            </div>

            <button
                className={`${currentPage !== 100 ? "bg-[#1B2133] cursor-pointer" : "opacity-50 cursor-no-drop"} w-[73px] h-[73px] rounded-[10px] flex items-center justify-center text-[25px]`}
                onClick={() => nextPageHandler()}>
                <img src={Arrow} alt="Arrow Next"/>
            </button>

        </div>
    );
};
