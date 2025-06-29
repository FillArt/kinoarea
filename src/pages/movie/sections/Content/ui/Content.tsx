import {ContentButtons} from "@/pages/movie/sections/Content/ui/ContentButtons.tsx";
import {ContentModel} from "@/pages/movie/sections/Content/model/contentModel.ts";
import {useState} from "react";
import {Section} from "@/shared/ui/sections/Section.tsx";

export const Content = () => {
    const [type, setType] = useState<string>(ContentModel[0].value)

    return (
        <Section>
            <ContentButtons type={type} setType={setType} />
        </Section>
    );
};