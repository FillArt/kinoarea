/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                main: ['Qanelas', 'sans-serif']
            },
            colors: {
                baseTextColor: "#FFFFFF",
                decorTextColor: "#F2F60F",
                subTextColor: "#3B486B",
            },
            backgroundColor: {
                backgroundColor: "#1E2538",

                accentButtonColor: "#F2F60F",
                formElementColor: "#3657CB",
                socialButtonColor: "#3C4767",

                positiveReviewColor: "#57D043",
                neutralReviewColor: "#FFF065",
                negativeReview: "#E04141"
            },
            maxWidth: {
                container: '1431px',
            },

            fontSize: {
                defaultFontSize: '20px',
                smallFontSize: '18px',
                titleFontSize: '65px',
                subtitleFontSize: '45px',
                descriptionFontSize: '25px',
            },
            spacing: {
                13: '13px',
                45: '45px',
            },
            boxShadow: {
                hoverDefaultButton: '0px 0px 15px 0px #4871FFCC'
            }
        },
        plugins: [],
    }

}