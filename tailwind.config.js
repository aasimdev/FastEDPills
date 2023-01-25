/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'blue': '#017fa0',
        'textblue': '#008eb3',
        'orange': '#ec4646',
        'darkblue': '#005166',
        'blue700': '#2792ae',
        'black': '#000000',
        'white': '#ffffff',
        "text": "#333333",
        "heading": "#00232c",
        "bodybg": "#f6f9fa",
        "gray": "#e1e1e1",
        "graylighter": "#f4f4f4",
        "graylight": "#cecccc",
        "graypaper": "#f0f0f0",
        "gray100": "#f5f5f5",
        "gray200": "#d1d1d1",
        "gray300": "#e9f4f7",
        "gray400": "#c5c5c5",
        "gray500": "#eaeaea",
        "gray600": "#e9f3f6",
        "placehoder": "#d9d9d9",
        "transparent": "rgba(0,0,0,0)"

      },
      fontFamily: {
        font: ['Poppins', 'sans-serif']
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1140px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1200px',
      },
      backgroundImage: {
        'signup': "url('../public/images/signup-bg.jpg')",
        'banner': "url('../public/images/banner-bg.jpg')",
        'questionsbg': "url('../public/images/gotquestions-bg.jpg')"
      },
    },
  },
  plugins: [],
}
