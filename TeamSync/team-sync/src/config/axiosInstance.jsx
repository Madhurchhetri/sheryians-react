import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("✅ API SUCCESS:", response.config.url);
    return response;
  },

  async (error) => {
    console.log("❌ API ERROR:", error.config?.url);
    console.log("❌ STATUS:", error.response?.status);
    console.log("❌ DATA:", error.response?.data);

    let originalReq = error.config;

    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;

      console.log("🔄 Trying to refresh access token...");

      try {
        let refreshRes = await axiosInstance.get("/auth/get-accessToken");

        console.log("✅ ACCESS TOKEN REFRESH SUCCESS:", refreshRes.data);

        return axiosInstance(originalReq);
      } catch (refreshError) {
        console.log("❌ ACCESS TOKEN REFRESH FAILED:");
        console.log(refreshError.response?.status);
        console.log(refreshError.response?.data);

        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "http://localhost:4000/api",
//   withCredentials: true,
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const originalReq = error.config;

//     if (!error.response) {
//       return Promise.reject(error);
//     }

//     if (error.response.status === 401 && !originalReq._retry) {
//       originalReq._retry = true;

//       try {
//         await axiosInstance.get("/auth/get-accessToken");
//         return axiosInstance(originalReq);
//       } catch (err) {
//         console.log("REFRESH FAILED:", err);
//         return Promise.reject(err);
//       }
//     }

//     return Promise.reject(error);
//   }
// );