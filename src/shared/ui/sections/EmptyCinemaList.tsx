import SadIcon from "./assets/sad.svg"


export const EmptyCinemaList = () => {
    return (
        <div className="h-[533px] flex items-center justify-center flex-col w-full">
            <img className="w-[150px]" src={SadIcon} alt=""/>
            <p className="text-[50px] font-bold">Тут ничего нет ...</p>
        </div>
    );
};