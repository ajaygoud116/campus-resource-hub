// // // import { useState, useContext } from "react";
// // // import axiosInstance from "../api/axiosInstance";
// // // import { AuthContext } from "../context/AuthContext";
// // // import { useNavigate } from "react-router-dom";

// // // function RegisterForm() {
// // //   const [name, setName] = useState(""); // added name state
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const { login } = useContext(AuthContext);
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       // Send name, email, password to backend
// // //       const res = await axiosInstance.post("/auth/register", { name, email, password });
// // //       login(res.data.token, email); // pass email from input
// // //       navigate("/home"); // redirect after registration
// // //     } catch (err) {
// // //       alert(err.response?.data?.message || "Registration failed");
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="flex flex-col">
// // //       <h2 className="text-2xl mb-4">Register</h2>
// // //       <input
// // //         type="text"
// // //         placeholder="Name"
// // //         value={name}
// // //         onChange={(e) => setName(e.target.value)}
// // //         required
// // //         className="mb-2 p-2 border rounded"
// // //       />
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
// // //       <button type="submit" className="bg-green-500 text-white p-2 rounded mt-2">
// // //         Register
// // //       </button>
// // //     </form>
// // //   );
// // // }

// // // export default RegisterForm;

// // import { useState, useContext } from "react";
// // import axiosInstance from "../api/axiosInstance";
// // import { AuthContext } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";

// // function RegisterForm() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const { login } = useContext(AuthContext);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axiosInstance.post("/auth/register", { name, email, password });
// //       login(res.data.token, res.data.email || email); // backend may not return email
// //       navigate("/home");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Registration failed");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto mt-10">
// //       <h2 className="text-2xl mb-4">Register</h2>
// //       <input
// //         type="text"
// //         placeholder="Name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         required
// //         className="mb-2 p-2 border rounded"
// //       />
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
// //       <button type="submit" className="bg-green-500 text-white p-2 rounded mt-2">
// //         Register
// //       </button>
// //     </form>
// //   );
// // }

// // export default RegisterForm;
// import { useState, useContext } from "react";
// import axiosInstance from "../api/axiosInstance";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// function RegisterForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosInstance.post("/auth/register", { name, email, password });
//       login(res.data.token, { name: res.data.name, email: res.data.email });
//       navigate("/home");
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col">
//       <h2 className="text-2xl mb-4">Register</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//         className="mb-2 p-2 border rounded"
//       />
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
//       <button type="submit" className="bg-green-500 text-white p-2 rounded mt-2">
//         Register
//       </button>
//     </form>
//   );
// }

// export default RegisterForm;

// src/components/RegisterForm.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with actual API call using axios
    const fakeToken = "0987654321";
    const fakeUser = { email, name: "New User" };

    login(fakeToken, fakeUser); // Auto-login after registration
    navigate("/home"); // Redirect to HomePage
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
