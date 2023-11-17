/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      maxWidth: {
        container: '1440px',
        containerX: '1320px',
        contentContainer: '1240px',
        containerSmall: '1024px',
        containerxs: '768px'
      },

      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Playfair: ['Playfair Display', ' serif'],
      
      },
      colors: {
        primary: '#504594',
        secondaryColor: '#F90',
        textColor: '#717070',
        hoverColor: 'rgba(100,255,218,0.3)',
        // iconBackground: 'rgba(254, 255, 254, 0.06)',
        boxShadow: '0px 16px 24px 4px rgba(1, 21, 41, 0.2)',
        // background: 'linear-gradient(151.76deg, rgba(66, 112, 251, 0) -8.92%, #4270FB 115.63%)'
      }
    },
  },
  plugins: [],
}

