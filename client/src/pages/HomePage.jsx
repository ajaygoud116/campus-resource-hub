// // import { useState, useEffect, useContext } from "react";
// // import UploadForm from "../components/UploadForm";
// // import NotesList from "../components/NotesList";
// // import Navbar from "../components/Navbar";
// // import axiosInstance from "../api/axiosInstance";
// // import { AuthContext } from "../context/AuthContext";

// // function HomePage() {
// //   const [notes, setNotes] = useState([]);
// //   const { user, logout } = useContext(AuthContext);

// //   // Fetch notes from backend
// //   const fetchNotes = async () => {
// //     try {
// //       const res = await axiosInstance.get("/notes");
// //       setNotes(res.data);
// //     } catch (err) {
// //       console.log(err);
// //       if (err.response?.status === 401) logout(); // token expired
// //     }
// //   };

// //   useEffect(() => {
// //     fetchNotes();
// //   }, []);

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="max-w-3xl mx-auto p-4">
// //         <h1 className="text-2xl font-bold mb-4">Welcome, {user?.email}</h1>
// //         <UploadForm fetchNotes={fetchNotes} />
// //         <NotesList notes={notes} fetchNotes={fetchNotes} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default HomePage;

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// function HomePage() {
//   const { user, logout } = useContext(AuthContext) || {};

//   return (
//     <div className="text-center mt-10">
//       <h1 className="text-3xl mb-4">Welcome, {user?.email || "Guest"}!</h1>
//       <button
//         onClick={logout}
//         className="bg-red-500 text-white p-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default HomePage;

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function HomePage() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">Welcome, {user?.name || user?.email}!</h1>
      <button
        onClick={logout}
        className="bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default HomePage;
