import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";

const useRole = () => {
  const axiosCommon = useAxiosCommon();
  const { user, loading } = useAuth();
  const { data = [], isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon(`/user/${user?.email}`);
      // console.log(data.role);
      return data;
    },
  });
  return [data, isLoading];
};

export default useRole;
