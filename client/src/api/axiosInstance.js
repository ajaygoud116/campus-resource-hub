// // import axios from "axios";

// // const axiosInstance = axios.create({
// //   baseURL: "http://localhost:5000/api",
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // });

// // export default axiosInstance;
// // Import axios
// import axios from "axios";

// // Create an axios instance with default base URL
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000/api", // replace 5000 with your backend port if different
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Optional: Add request interceptor to attach token
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token"); // if you store JWT in localStorage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // update if backend port is different
  headers: { "Content-Type": "application/json" },
});

// Request interceptor to attach token automatically
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

