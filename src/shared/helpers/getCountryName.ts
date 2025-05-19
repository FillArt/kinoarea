export const getCountryName = (code: string, locale: string = 'en-EN') => {
    try {
        const regionNames = new Intl.DisplayNames([locale], { type: 'region' });
        return regionNames.of(code);
    } catch {
        return code;
    }
};