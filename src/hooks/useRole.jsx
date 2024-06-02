import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";

const useRole = () => {
  const axiosCommon = useAxiosCommon();
  const { user, loading } = useAuth();
  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon(`/user/${user?.email}`);
      console.log(data);
      return data;
    },
  });
  return [data, refetch, isLoading];
};

export default useRole;
