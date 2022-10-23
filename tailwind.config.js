/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#34e593",
        
"secondary": "#eaa046",
        
"accent": "#e1bfff",
        
"neutral": "#221C26",
        
"base-100": "#F8F8FC",
        
"info": "#77B7DF",
        
"success": "#30D99E",
        
"warning": "#F9BE58",
        
"error": "#E7786E",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
