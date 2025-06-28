import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import ArrowIcon from "@/pages/home/sections/NewTrailers/assets/arrow.svg";
import {Section} from "@/shared/ui/sections/Section.tsx";
import {ActorsList} from "@/pages/movie/sections/Actors/ui/ActorsList.tsx";

export const Actors = () => {
    return (
        <Section>
            <SectionTitle line={false} title={'В главных ролях:'} sectionVersion="two">
                <a className="group  hover:text-[#3657CB] tabletLg:text-[22px] text-[18px] flex items-center" href="/">
                    {'Все актёры'}
                    <img src={ArrowIcon} alt="Стрелка" className="group-hover:animate-bounce-x tabletLg:ml-[27px] ml-[14px] w-6 h-6"/>
                </a>
            </SectionTitle>

            <ActorsList />

        </Section>
    );
};
