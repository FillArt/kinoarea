import Skeleton from "react-loading-skeleton";

export const CardMovieSkeleton = () => {
    return (
        <div>
            <div className="tabletLg:h-[470px] h-[286px]">
                <Skeleton
                    height="100%"
                    baseColor="#191E2E"
                    highlightColor="#C8D0D6"
                />
            </div>

            <div className="h-[20px] mt-[10px]">
                <Skeleton
                    height="100%"
                    baseColor="#191E2E"
                    highlightColor="#C8D0D6"
                />
            </div>

            <div className="h-[20px] w-[150px] mt-[10px]">
                <Skeleton
                    height="100%"
                    baseColor="#191E2E"
                    highlightColor="#C8D0D6"
                />
            </div>
        </div>
    );
};
