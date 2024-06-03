/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {colors: {
    black: {
      100:"#313131",
      200: "#353535",
      300: "#141414",
      400: "#2A2A2A",
      500:'#090505',
      600:"#242527",
      700:"#000000" ,
      800:"#1F1F1F",
      900:"#1E1E1E",
      1000:"#08110C",
      1100:"#111010",
      1200:"#030303",
      1300:"#0A142F",
      1400:"#212529",

    },
    gray: {
      100: "#5d5f5fd1",
      200:"#18181B" ,
      300: "#323232",
      400: "#adadad",
      500: "#8A8A8A",
     600: "#E4E4E4",
      700: "#505050",
      800: "#E5E5E5",
      900: "#64748B",
      1000: "#3f3f3fb3",
      1100: "#0000004d",
      1200:"#686868",
      1300:"#B8B8B8",
    },
    yellow: "#f5b30a",
    green: {
      100: "#82F273",
      200: "#04DC00",
      300: "#4BA277",
      400: "#46a879",
      500: "#5fc190",
      600: "#ffffff59",
      700: "#33A177",
      800: "#025E00",
      900:'#047301',
    },
    blue:{
      400:'#004080',
      500:"#3E436D",
    },
    purple: "#8c47f566",
    pink: "#DE91F2",
    white: "#ffffff",
    red: "#CF0000",
    grey:{
      100:"#7D7D7D",
      200:'#4A4A4A',
      300:"#373737",
      400:"#747474",
      500:"#383838",
      600:"#686868",
      700:"#505050",
      800:"#525252",
      900:"#52525B",
      1000:"#5E635A" ,
      1100:"#353535",
      1200:"#313131",
      1300:"#E4E4E7",
      1400:"#F6F6F6",
      1500:"#FAFAFA",
      1600:"#F8F9FA",
      1700:"#F8FAFC",
    },
  },
  fontSize: {
    72: "72px",
    64: "64px",
    56: "56px",
    48: "48px",
    42: "42px",
    40: "40px",
    30: "30px",
    36: "36px",
    32: "32px",
    35: "35px",
    34: "34px",
    33: "33px",
    32: "32px",
    28: "28px",
    25: "25px",
    24: "24px",
    23:"23px",
    22: "22px",
    20: "20px",
    18: "18px",
    17:"17px",
    16: "16px",
    15:"15px",
    14: "14px",
    13: "13px",
    12: "12px",
    11: "11px",
    10: "10px",
    9:"9px",
    8:"8px",
  },
  screens: {
    xsm: "440px",
    sm: "640px",
    md: "868px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "10px",
    md: "0.375rem",
    lg: "10px",
    full: "9999px",
    large: "12px",
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  fontFamily: {
    inter: ["Inter", "sans-serif"],
    MPlus: ["M PLUS 1 Code", "monospace"],
    Montserrat:["Montserrat" , "sans-serif"],
    PlusJakartaSans:["Plus Jakarta Sans" , "sans-serif"],
    Poppins:["Poppins","sans-serif"],
    Raleway:["Raleway", "sans-serif"],
    Kufam:["Kufam","sans-serif"],
    SourceSans3:["Source Sans 3","sans-serif"],
  
  },
},
    
  plugins: [],
}

