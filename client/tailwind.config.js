module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      "1/2": "50%",
    },
    extend: {
      colors: {
        gYellow: {
          light: "#FCC93D",
          dark: "#EDB415",
        },
        gBlue: {
          light: "#3F72AF",
          dark: "#234773",
        },
        gTeal: {
          light: "#44AFB1",
          dark: "#347E7F",
        },
        gRed: {
          light: "#D33A4B",
          dark: "#B0303E",
        },
      },
      fontFamily: {
        ginger: "Ginger, Prompt, sans-serif",
      },
    },
  },
  plugins: [],
};
