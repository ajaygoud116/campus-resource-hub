import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirect to login page
  };

  return (
    <nav className="flex justify-between p-4 shadow bg-white">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/home")}>
        Campus Resource Hub
      </h1>
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <span>{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 px-3 py-1 rounded text-white"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
