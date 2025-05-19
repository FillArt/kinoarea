export const formatDate = (
    dateString?: string,
    locale = import.meta.env.VITE_APP_LANGUAGE || "en-US"
): string => {
    if (!dateString) return "—";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "—"; // Невалидная дата

    return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
};