/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "color-bg": "#1f2641",
        "color-danger": "#f75842",
        "color-warning": "#f7c94b",
        "color": "#57370d",
        "green-light": "#28DF99",
        "yellow-light": "#FFC75F",

      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'profile': "url('/assets/images/bg-profile.jpg')",
        'javad': "url('/assets/images/j3.png')",
        'dream': "url('/assets/images/dream.jpeg')",
        'planet': "url('https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=600')",
        'earth': "url('https://firebasestorage.googleapis.com/v0/b/myprojects-b250e.appspot.com/o/earth.png?alt=media&token=8d849484-782d-45ce-8b0c-acaff0966d32')",
        
        'ai': "url('/assets/images/ai.jpg')",
        "tech": "url('https://www.shutterstock.com/image-vector/abstract-gradient-wave-particles-big-data-1930623710')",
        "stars": "url('https://firebasestorage.googleapis.com/v0/b/myprojects-b250e.appspot.com/o/stars.png?alt=media&token=4dd4133b-b458-456e-93e3-b510acdfa1ed')",
        "turtle": "url('https://firebasestorage.googleapis.com/v0/b/myprojects-b250e.appspot.com/o/Turtle.png?alt=media&token=1abedd86-9a40-4dd7-990e-f0f4310e4d36')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
