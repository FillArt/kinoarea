import Skeleton from "react-loading-skeleton";

export const YoutubePlayerSkeleton = () => {
    return (
        <div>
            <Skeleton height={760}
                      baseColor="#191E2E"
                      highlightColor="#C8D0D6"
            />
            <Skeleton height={50}
                      width={700}
                      style={{marginTop: "10px"}}
                      baseColor="#191E2E"
                      highlightColor="#C8D0D6"
            />
        </div>
    );
};