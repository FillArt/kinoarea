import Skeleton from "react-loading-skeleton";

export const CardMovieSkeleton = () => {
    return (
        <div>
            <Skeleton height={470}
                      baseColor="#191E2E"
                      highlightColor="#C8D0D6"
            />
            <Skeleton height={20}
                      style={{marginTop: "10px"}}
                      baseColor="#191E2E"
                      highlightColor="#C8D0D6"
            />
            <Skeleton width={150}
                      height={20}
                      style={{marginTop: "10px"}}
                      baseColor="#191E2E"
                      highlightColor="#C8D0D6"/>
        </div>
    );
};