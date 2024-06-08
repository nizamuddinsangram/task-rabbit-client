import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  // const axiosCommon = useAxiosCommon();
  const { user, loading } = useAuth();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/${user?.email}`);
      // console.log(data);
      return data;
    },
    initialData: {},
  });
  return [data, refetch, isLoading];
};

export default useRole;
