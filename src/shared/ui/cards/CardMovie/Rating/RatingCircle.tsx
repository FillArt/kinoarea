type RatingProps = {
    name: string;
    rating: number;
};

export const RatingCircle = ({rating, name}: RatingProps) => {

    const roundedRating = Math.round(rating);

    const ratingClasses: { [key: number]: string } = {
        1: "#FF0000",
        2: "#F13030",
        3: "#CB3F36",
        4: "#CB3F36",
        5: "#CB6C36",
        6: "#89CB36",
        7: "#78CB36",
        8: "#4BCB36",
        9: "#34EA16",
        10: "#28FF04",
    };

    const style = ratingClasses[roundedRating] || "bg-gray-500";

    return (
        <div className="flex flex-col max-w-[52px] text-center">
            <svg
                viewBox="0 0 36 36"
                width="52"
                height="52"
                className={`circular-chart`}
            >
                <path
                    className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    stroke={`${style}`}
                    strokeDasharray={`${roundedRating * 10}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="21.5" className="percentage">{rating.toFixed(1)}</text>
            </svg>
            {name}
        </div>

    );
};
