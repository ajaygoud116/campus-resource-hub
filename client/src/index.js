// // // import React from "react";
// // // import ReactDOM from "react-dom/client";
// // // import App from "./app";
// // // import "./index.css"; // optional, create empty if not needed

// // // const root = ReactDOM.createRoot(document.getElementById("root"));
// // // root.render(
// // //   <React.StrictMode>
// // //     <App />
// // //   </React.StrictMode>
// // // );

// // // import React from "react";
// // // import ReactDOM from "react-dom/client";
// // // import App from "./app";
// // // import { AuthContextProvider } from "./context/AuthContext";
// // // import "./index.css";

// // // const root = ReactDOM.createRoot(document.getElementById("root"));
// // // root.render(
// // //   <React.StrictMode>
// // //     <AuthContextProvider>
// // //       <App />
// // //     </AuthContextProvider>
// // //   </React.StrictMode>
// // // );

// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./app";
// // import { AuthContextProvider } from "./context/AuthContext"; // ✅ correct named import
// // import "./index.css";

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(
// //   <React.StrictMode>
// //     <AuthContextProvider>
// //       <App />
// //     </AuthContextProvider>
// //   </React.StrictMode>
// // );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "C:\Users\Ajay Goud\Downloads\Campus Resource Hub\Campus-Resource-Hub\client\src\App.jsx";
// import AuthContextProvider from "./context/AuthContext";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
