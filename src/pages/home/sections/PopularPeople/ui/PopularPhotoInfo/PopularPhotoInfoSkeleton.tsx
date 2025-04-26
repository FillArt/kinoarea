import Skeleton from "react-loading-skeleton";


export const PopularPhotoInfoSkeleton = () => {
    return (
        <div className="tablet:h-full phone:h-[321px] h-[179px] rounded-[10px]">
            <Skeleton
                height="100%"
                baseColor="#191E2E"
                highlightColor="#C8D0D6"
            />
        </div>

    );
};

