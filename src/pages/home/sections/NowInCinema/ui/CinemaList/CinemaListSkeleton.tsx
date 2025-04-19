import {CardMovieSkeleton} from "@/shared/ui/cards";

type CinemaListSkeletonProps = {
    numberOfFilms: number;
}

export const CinemaListSkeleton = ({numberOfFilms}: CinemaListSkeletonProps) => {
    return (
        <div className="mt-14 grid grid-cols-12 gap-[23px]">
            {[...Array(numberOfFilms)].map((_, i) => (
                <div key={i} className="tablet:col-span-3 phone:col-span-4 col-span-6">
                    <CardMovieSkeleton />
                </div>
            ))}
        </div>
    );
};
