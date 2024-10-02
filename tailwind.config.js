/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0563bb",
        white: "#f2f3f5",
        black: "#0C0C0C",
        name: "#45505b",
      },
      boxShadow: {
        active:
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        "blue-shadow":
          "rgba(5, 99, 187, 0.25) 0px 54px 55px, rgba(5, 99, 187, 0.12) 0px -12px 30px, rgba(5, 99, 187, 0.12) 0px 4px 6px, rgba(5, 99, 187, 0.17) 0px 12px 13px, rgba(5, 99, 187, 0.09) 0px -3px 5px",
        threeD:
          "rgba(5, 99, 187, 0.4) -5px 5px, rgba(5, 99, 187, 0.3) -10px 10px, rgba(5, 99, 187, 0.2) -15px 15px, rgba(5, 99, 187, 0.1) -20px 20px, rgba(5, 99, 187, 0.05) -25px 25px",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "0px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #B5C0D0 0%, #B5C0D0 50%, #E1E6EA 50%, #E1E6EA 100%)",
      },
      animation: {
        "spin-fast": "spin 0.75s linear infinite", // Adjust the duration as needed
      },
    },
  },
  plugins: [],
};
