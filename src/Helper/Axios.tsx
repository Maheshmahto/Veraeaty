

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://veraeaty.ai/",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
// });

// // Add a request interceptor to conditionally add the header
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Only add ngrok-skip-browser-warning for specific environments if needed
//     // For now, let's remove it entirely since it's causing CORS issues
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://veraeaty.ai",
    // baseURL: "http://192.168.29.82:8000",

  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  // },
   headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});



export default axiosInstance;