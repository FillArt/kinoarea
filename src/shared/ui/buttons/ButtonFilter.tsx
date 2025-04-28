
 export const ButtonFilter = ({ isActive, onClick, title }: { isActive: boolean, onClick: () => void, title: string }) => {
    return (
        <button
            onClick={onClick}
            className={`${
                isActive ? "opacity-100 text-[#3657CB]" : "opacity-50"
            } text-white tabletLg:text-smallFontSize text-smallFontSizeTabletLg hover:text-[#3657CB]`}
        >
            {title}
        </button>
    );
};