/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./src/components/*.{html,js}",
    "./src/screens/*.{html,js}",
    "./src/screens/log-in/*.{html,js}",
    "./src/screens/Home-Feed/*.{html,js}",
    "./src/screens/Tweet-Post/*.{html,js}",
    "./src/screens/Profile/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#F9F9F9",
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "secondary": "rgba(255, 255, 255, 0.60)",
        "blue-wash": "#75BEEF33",
        "stroke": "rgba(29, 155, 240, 0.24)",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        "success": "#00BE74",
        "error": "#8B141A",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
        "div-purple": "#9747FF"
      },
      width: {
        "5.5": "334px",
        "6.5": "442px",
        "21.75": "21.75rem",
        "26.5": "26.5rem",
        "27.18": "27.188rem",
        "485": "485px",
        "37.5": "37.5rem",
        "512": "512px",
        "375": "375px",
      },
      height: {
        "19": "19px",
        "2.43": "2.4375rem",
        "3.6": "3.75rem",
        "360": "360px",
        "667": "667px"
      },
      borderRadius: {
        'rounded-xl': "65px",
        'rounded-xs': "30px",
        'rounded-12.5': "12.5rem"
      },
      boxShadow: {
        '3xl': "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        'c-xl': '24px',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        "5xl": "1.5rem",
        inherit: "inherit" 
      },
      borderWidth: {
        '1': '1px',
      },
      margin: { 
        '75': '7.75px',
      },
      padding: {
        "0.1":"0.1rem",
        "0.625":"0.625rem",
        "15.5": "15.5rem",
      },
      gap: {
        "0.6": "0.625rem"
      },
      backgroundImage: {
        "home-selected": "url('~/../../public/images/Home-selected.svg')",
        "user-selected": "url('~/../../public/images/Group-selected.svg')",
        "banner": "url('~/../../public/images/banner.jpg')"
      }
    },
  },
  plugins: [],
}

