import {useEffect, useState} from "react";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";
import {CinemaListSkeleton} from "@/pages/home/sections/NowInCinema/ui/CinemaList/CinemaListSkeleton.tsx";

export const CategoryPageLoading = () => {
    const [numberOfFilms, setNumberOfFilms] = useState<number>(8)
    const breakpoint = useBreakpoint()

    useEffect(() => {
        if (breakpoint === "phone") setNumberOfFilms(6)
        else if (breakpoint === "tablet") setNumberOfFilms(9)
        else {
            setNumberOfFilms(8)
        }
    }, [breakpoint]);

    return (
        <CinemaListSkeleton numberOfFilms={numberOfFilms}/>
    );
};