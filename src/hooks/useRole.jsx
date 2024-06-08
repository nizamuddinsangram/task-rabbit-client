import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";

const useRole = () => {
  // const axiosSecure = useAxiosSecure();
  const axiosCommon = useAxiosCommon();
  const { user, loading } = useAuth();
  // console.log(user);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon(`/user/${user?.email}`);
      // console.log(data);
      return data;
    },
    // initialData: {},
  });
  return [data, refetch, isLoading];
};

export default useRole;
