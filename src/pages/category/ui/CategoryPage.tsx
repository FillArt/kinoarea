import {HomePageLayout} from "@/shared/layouts";
import {useNavigate, useParams} from "react-router-dom";
import {useGenreIdByName} from "@/shared/api/movies/hooks/useGenreIdByName.ts";
import {capitalizeFirstLetter} from "@/shared/helpers/capitalizeFirstLetter.ts";
import {useEffect} from "react";

export const CategoryPage = () => {
    const { genre } = useParams();
    const navigate = useNavigate();

    const idGenre = useGenreIdByName(capitalizeFirstLetter(genre ?? ''))

    useEffect(() => {
        if (!idGenre) {
            navigate(`/404`);
        }
    }, [idGenre, navigate]);

    return (
        <HomePageLayout imgStatus={false}>
            <div className="container max-w-container mx-auto outline text-white my-10">
                CategoryPage = {idGenre}
            </div>
        </HomePageLayout>
    );
};
