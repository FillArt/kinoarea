import Skeleton from "react-loading-skeleton";


export const PopularListInfoSkeleton = () => {
    return (
        <div className="tablet:h-[444px] phone:h-[321px] h-[303px] rounded-[10px]">
            <Skeleton
                height="100%"
                baseColor="#191E2E"
                highlightColor="#C8D0D6"
            />
        </div>

    );
};

