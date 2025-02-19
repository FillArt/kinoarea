import {ButtonIcon} from "@/common/components/buttons/ButtonIcon.tsx";
import LikeIcon from "@/common/components/buttons/assets/like.svg";


type LikesOrDislikesProps = {
    digital: number | undefined;
    onClick: () => void;
    type: "like" | "dislike";

}

export const LikesOrDislikes = ({digital, onClick, type}: LikesOrDislikesProps) => {

    const onClickHandler = () => {
        onClick();
    }

    const styleImg = type === "like" ? 'rotate-0' : 'rotate-180'

    return (
        <button className="flex flex-col gap-[8px] items-center">
            <ButtonIcon onClick={onClickHandler} style="like">
                <img src={LikeIcon} className={`${styleImg} mb-[7px]`} alt=""/>
            </ButtonIcon>

            <span>{digital}</span>
        </button>
    );
};