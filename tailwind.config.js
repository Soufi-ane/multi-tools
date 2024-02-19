/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        103: "1.03",
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          ".scrollbar-thin::-webkit-scrollbar-thumb": {
            width: "2px",
          },
          ".scrollbar-thumb-transparent::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
          ".scrollbar-track-transparent::-webkit-scrollbar-track": {
            background: "transparent",
          },
        };

        addUtilities(newUtilities, ["responsive", "hover"]);
      },
    ],
  },
};
