// import axios from "axios";

// export let axiosInstance = axios.create({
//     baseURL:"http://localhost:4000/api",
//     withCredentials: true,
// })

// axiosInstance.interceptors.response.use(
//     (response)=> response,
//         async (error) =>{
//             let originalReq = error.config;

//             if(error.response.status === 401 && !originalReq._retry){
//                 originalReq._retry = true;

//                 try {
//                     await axiosInstance.get("/auth/get-accessToken");
//                     return axiosInstance(originalReq);
//                 } catch (error) {
//                     window.location.href = "/";
//                     return Promise.reject(error)
//                 }
//             }
//         }
    
// )

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalReq = error.config;

    if (!error.response) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalReq._retry) {
      originalReq._retry = true;

      try {
        await axiosInstance.get("/auth/get-accessToken");
        return axiosInstance(originalReq);
      } catch (err) {
        console.log("REFRESH FAILED:", err);
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);