// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";

// const customDarkTheme = {
//   dark: true,
//   // colors: {
//   //   background: "#15202b",
//   //   surface: "#15202b",
//   //   primary: "#3f51b5",
//   //   secondary: "#03dac6",
//   //   error: "#f44336",
//   //   info: "#2196F3",
//   //   success: "#4caf50",
//   //   warning: "#fb8c00",
//   // },
// };


const myTheme = {
  dark: false,
  colors: {
    background: "#F5F5F5",
    surface: "#FFFFFF",
    primary: "#efc591",
    secondary: "#F22C11",
    error: "#F14668",
    info: "#F212FC",
    success: "#48C78E",
    warning: "#ffdd80",
  },
};

const myDarkTheme = {
  dark: true,
  colors: {
    background: "#eeeeee",
    surface: "#FFFFFF",
    primary: "#efc591",
    secondary: "#F22C11",
    error: "#F14668",
    info: "#F212FC",
    success: "#48C78E",
    warning: "#ffdd80",
  },
};

export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: "myTheme",
    themes: {
      myTheme,myDarkTheme
    },
  },
});
