

export const formatDate = (dateString: string, locale = import.meta.env.VITE_APP_LANGUAGE) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
};