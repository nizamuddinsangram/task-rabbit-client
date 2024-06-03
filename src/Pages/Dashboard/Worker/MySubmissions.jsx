import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const MySubmissions = () => {
  const { user, loading } = useAuth();
  const axiosCommon = useAxiosCommon();
  const { data: mySubmission } = useQuery({
    queryKey: ["my-submissions", user?.email],
    queryFn: async () => {
      const { data } = await axiosCommon(`/submission/${user?.email}`);
      return data;
    },
    enabled: !loading || !!user?.email,
  });
  console.log(mySubmission);
  return (
    <div>
      <p>My submission </p>
    </div>
  );
};

export default MySubmissions;
