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
            container: {
                center: true,
                padding: "10px",
            },
            colors: {
                baseTextColor: "#FFFFFF",
                decorTextColor: "#F2F60F",
                subTextColor: "#3B486B",
                emptyTextColor: "#404961",
                formTextColor: "#3657CB"
            },
            backgroundColor: {
                backgroundColor: "#1E2538",
                emptyColor: "#191E2E",

                accentButtonColor: "#F2F60F",
                formElementColor: "#3657CB",
                socialButtonColor: "#3C4767",


                positiveReviewColor: "#57D043",
                neutralReviewColor: "#FFF065",
                negativeReview: "#E04141",

                rating10: "#28FF04",
                rating9: "#34EA16",
                rating8: "#4BCB36",
                rating7: "#78CB36",
                rating6: "#89CB36",
                rating5: "#CB6C36",
                rating4: "#CB3F36",
                rating3: "#CB3F36",
                rating2: "#F13030",
                rating1: "#FF0000",
            },
            maxWidth: {
                container: '1451px',
            },

            fontSize: {
                defaultFontSize: '20px',
                smallFontSize: '18px',
                titleFontSize: '65px',
                subtitleFontSize: '45px',
                descriptionFontSize: '25px',

                smallFontSizeTabletLg: '13px',
            },
            spacing: {
                13: '13px',
                45: '45px',
            },
            boxShadow: {
                hoverDefaultButton: '0px 0px 15px 0px #4871FFCC'
            },
            screens: {
                'tabletLg': '996px',
                'tablet': '768px',
                'phone': '566px'
            }
        },
        plugins: [],
    }

}