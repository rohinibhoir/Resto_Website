/** @type {import ('tailwindcss').config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          primary:"#ffc001",
          secondary:"#ff9c01",
        },
        container:{
          center:true,
          padding:{
            DEFAULT:"1rem",
            sm:"3rem"
          }
        }
      },
    },
    plugins: [],
  }
  