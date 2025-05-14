type RatingProps = {
    rating: number;
    absolute?: boolean
};

export const Rating = ({rating, absolute = true}: RatingProps) => {

    const roundedRating = Math.round(rating);

    const ratingClasses: { [key: number]: string } = {
        1: "bg-rating1",
        2: "bg-rating2",
        3: "bg-rating3",
        4: "bg-rating4",
        5: "bg-rating5",
        6: "bg-rating6",
        7: "bg-rating7",
        8: "bg-rating8",
        9: "bg-rating9",
        10: "bg-rating10",
    };

    const style = ratingClasses[roundedRating] || "bg-gray-500";

    return (
        <div
            className={`
            py-1 px-5 
            rounded-[5px] 
            inline-block
            text-center
            ${absolute ? 'absolute' : ''} font-bold 
            ${style} 
            top-[10px] right-[17px]`}
        >
            {rating}
        </div>
    );
};
