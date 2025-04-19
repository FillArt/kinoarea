
import { useTranslation } from "react-i18next";
export type Filter = "all" | "action" | "adventures" | "comedy" | "fantasy" | "thrillers" | "drama";

export const useCategoriesList = () => {
    const { t } = useTranslation("nowInCinema");

    return [
        { key: "all", title: t("all") },
        { key: "action", title: t("action") },
        { key: "adventures", title: t("adventures") },
        { key: "comedy", title: t("comedy") },
        { key: "fantasy", title: t("fantasy") },
        { key: "thrillers", title: t("thrillers") },
        { key: "drama", title: t("drama") },
    ] as { key: Filter; title: string }[];
};
