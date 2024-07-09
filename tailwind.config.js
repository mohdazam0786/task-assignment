/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "main-blue": "#122b49",
        bisque: "#f5dbc2",
        "border-grey": "#d6d6d6",
        slategray: "#455e7d",
        "grey-text": "#424242",
        black: "#000",
        snow: "#fdfaf7",
        gainsboro: "#d9d9d9",
        "cream-dark": "#f6efe6",
        lightgray: {
          "100": "#ded6cc",
          "200": "#cdcdcd",
        },
        "grey-text-2": "#7a7a7a",
        cornflowerblue: "#44a0fc",
        gray: {
          "100": "#878787",
          "200": "rgba(0, 0, 0, 0.85)",
          "300": "rgba(0, 0, 0, 0.25)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(18, 18, 18, 0.87)",
        },
        silver: "#c4c4c4",
        cream: "#fcf8f4",
        peru: "#b0854c",
        whitesmoke: "#f8f8f8",
        aliceblue: "#edf2f8",
        "dust-red-5": "#ff4d4f",
        lavender: "#e0ecff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "merriweather-sans": "'Merriweather Sans'",
        merriweather: "Merriweather",
        poppins: "Poppins",
        "jacques-francois": "'Jacques Francois'",
        roboto: "Roboto",
      },
      borderRadius: {
        "10xl": "29px",
        lg: "18px",
        mini: "15px",
        "11xl": "30px",
        xl: "20px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      xl: "20px",
      "15xl-6": "34.6px",
      "2xl": "21px",
      "9xl": "28px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xs: "12px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
