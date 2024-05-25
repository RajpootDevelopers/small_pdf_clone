/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   "F23030": "#F23030",
      //   "003CB2": "#003CB2",
      //   "7961F2": "#7961F2",
      //   "0FC0C5": "#0FC0C5",
      //   "3D99F5": "#3D99F5",
      //   "0C4": "#0C4",
      //   "FF8000": "#FF8000",
      //   "FFB700": "#FFB700",
      //   "E667E6": "#E667E6",
      //   "FF5975": "#FF5975",
      // }
    },
  },
  plugins: [],
};
