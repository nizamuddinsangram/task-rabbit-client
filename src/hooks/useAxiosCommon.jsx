import axios from "axios";

const axiosCommon = axios.create({
  baseURL: "https://task-rabbit-server.vercel.app",
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
