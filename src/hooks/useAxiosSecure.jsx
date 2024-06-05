import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8000",
});
const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  //request interceptor to add authorization

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      //   console.log("request stooped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  //response interceptor to add authorization
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      // if(error?.response.status)
      const status = error?.response?.status;
      console.log("error in the interceptors", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error, status);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
