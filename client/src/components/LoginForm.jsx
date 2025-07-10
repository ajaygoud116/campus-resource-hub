// // // import { useState, useContext } from "react";
// // // import axiosInstance from "../api/axiosInstance";
// // // import { AuthContext } from "../context/AuthContext";
// // // import { useNavigate } from "react-router-dom";

// // // function LoginForm() {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const { login } = useContext(AuthContext);
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await axiosInstance.post("/auth/login", { email, password });
// // //       login(res.data.token, email); // use email from input, backend only returns token
// // //       navigate("/home"); // redirect after login
// // //     } catch (err) {
// // //       alert(err.response?.data?.message || "Login failed");
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="flex flex-col">
// // //       <h2 className="text-2xl mb-4">Login</h2>
// // //       <input
// // //         type="email"
// // //         placeholder="Email"
// // //         value={email}
// // //         onChange={(e) => setEmail(e.target.value)}
// // //         required
// // //         className="mb-2 p-2 border rounded"
// // //       />
// // //       <input
// // //         type="password"
// // //         placeholder="Password"
// // //         value={password}
// // //         onChange={(e) => setPassword(e.target.value)}
// // //         required
// // //         className="mb-2 p-2 border rounded"
// // //       />
// // //       <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
// // //         Login
// // //       </button>
// // //     </form>
// // //   );
// // // }

// // // export default LoginForm;

// // import { useState, useContext } from "react";
// // import axiosInstance from "../api/axiosInstance";
// // import { AuthContext } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";

// // function LoginForm() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const { login } = useContext(AuthContext);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axiosInstance.post("/auth/login", { email, password });
// //       login(res.data.token, email);
// //       navigate("/home");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Login failed");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto mt-10">
// //       <h2 className="text-2xl mb-4">Login</h2>
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         required
// //         className="mb-2 p-2 border rounded"
// //       />
// //       <input
// //         type="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //         required
// //         className="mb-2 p-2 border rounded"
// //       />
// //       <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
// //         Login
// //       </button>
// //     </form>
// //   );
// // }

// // export default LoginForm;

// import { useState, useContext } from "react";
// import axiosInstance from "../api/axiosInstance";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosInstance.post("/auth/login", { email, password });
//       login(res.data.token, { email: res.data.email, name: res.data.name });
//       navigate("/home");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col">
//       <h2 className="text-2xl mb-4">Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="mb-2 p-2 border rounded"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="mb-2 p-2 border rounded"
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
//         Login
//       </button>
//     </form>
//   );
// }

// export default LoginForm;

// src/components/LoginForm.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with actual API call using axios
    const fakeToken = "1234567890";
    const fakeUser = { email, name: "Demo User" };

    login(fakeToken, fakeUser); // Update context
    navigate("/home"); // Redirect after login
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
