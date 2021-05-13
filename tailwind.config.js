const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            grayBorder: "#2F3336",
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            blue: colors.blue,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
