// // // import { useState, useContext } from "react";
// // // import LoginForm from "../components/LoginForm";
// // // import RegisterForm from "../components/RegisterForm";
// // // import { AuthContext } from "../context/AuthContext";

// // // function AuthPage() {
// // //   const [isLogin, setIsLogin] = useState(true);
// // //   const { user } = useContext(AuthContext);

// // //   if (user) {
// // //     return <h2 className="text-center mt-10">You're already logged in as {user.email}</h2>;
// // //   }

// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// // //       <div className="bg-white p-6 rounded shadow w-96">
// // //         {isLogin ? <LoginForm /> : <RegisterForm />}
// // //         <button
// // //           className="mt-4 text-blue-500"
// // //           onClick={() => setIsLogin(!isLogin)}
// // //         >
// // //           {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default AuthPage;

// // import React, { useContext } from "react";
// // import { AuthContext } from "../context/AuthContext";
// // import RegisterForm from "../components/RegisterForm";
// // import LoginForm from "../components/LoginForm";

// // function AuthPage() {
// //   const { user } = useContext(AuthContext) || {}; // safe fallback

// //   if (user) return <h2 className="text-center mt-10">You are already logged in!</h2>;

// //   return (
// //     <div className="flex flex-col md:flex-row justify-around mt-10">
// //       <RegisterForm />
// //       <LoginForm />
// //     </div>
// //   );
// // }

// // export default AuthPage;

// import RegisterForm from "../components/RegisterForm";
// import LoginForm from "../components/LoginForm";

// function AuthPage() {
//   return (
//     <div className="flex flex-col md:flex-row gap-10 p-10 justify-center items-center">
//       <RegisterForm />
//       <LoginForm />
//     </div>
//   );
// }

// export default AuthPage;

// src/pages/AuthPage.jsx
import React, { useState, useContext } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useContext(AuthContext); // Access user
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Redirect if user is already logged in
  React.useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={toggleForm} style={{ cursor: "pointer" }}>
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
