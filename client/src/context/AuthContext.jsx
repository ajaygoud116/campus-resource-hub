// // import { createContext, useState, useEffect } from "react";

// // export const AuthContext = createContext();

// // const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [token, setToken] = useState(localStorage.getItem("token") || null);

// //   // Load user info when token exists
// //   useEffect(() => {
// //     if (token) {
// //       setUser({ email: localStorage.getItem("email") });
// //     }
// //   }, [token]);

// //   // Login → save token + email
// //   const login = (token, email) => {
// //     localStorage.setItem("token", token);
// //     localStorage.setItem("email", email);
// //     setToken(token);
// //     setUser({ email });
// //   };

// //   // Logout → clear everything
// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("email");
// //     setToken(null);
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, token, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export default AuthProvider;

// // import { createContext, useState } from "react";

// // export const AuthContext = createContext();

// // export const AuthContextProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   const login = (token, email) => {
// //     setUser({ token, email });
// //     localStorage.setItem("token", token);
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     localStorage.removeItem("token");
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// import { createContext, useState } from "react";

// // ✅ Create the context
// export const AuthContext = createContext();

// // ✅ Named export for the provider
// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (token, email) => {
//     setUser({ token, email });
//     localStorage.setItem("token", token);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// import { createContext, useState } from "react";

// // Create AuthContext
// export const AuthContext = createContext();

// // AuthContext Provider component
// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // user = { email, name }
//   const [token, setToken] = useState(null);

//   // Login function
//   const login = (token, userData) => {
//     setToken(token);
//     setUser(userData);
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   // Logout function
//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;

// src/context/AuthContext.jsx
import { createContext, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

// AuthContext Provider component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user = { email, name }
  const [token, setToken] = useState(null);

  // Login function
  const login = (token, userData) => {
    setToken(token);
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
