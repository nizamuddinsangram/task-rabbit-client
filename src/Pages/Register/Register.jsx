import axios from "axios";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../../public/utils";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile, loading, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const role = form.role.value;

    try {
      //upload image and get image url
      const image_url = await imageUpload(image);
      const user = {
        name,
        email,
        role,
        image_url,
      };
      const { data } = await axios.post("http://localhost:8000/register", user);
      console.log(data);
      // user registration
      await createUser(email, password);
      // update user name display photo
      await updateUserProfile(name, image_url);
      navigate(location.state ? location.state : "/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const currentUser = await googleSignIn();
      const user = currentUser.user;
      const savedUser = {
        name: user.displayName,
        email: user.email,
        image_url: user.photoURL,
      };
      // console.log(savedUser);
      const { data } = await axios.post(
        "http://localhost:8000/google-login",
        savedUser
      );
      console.log(data);
      navigate(location.state ? location.state : "/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register </h1>
          <p className="text-sm text-gray-400">Welcome to TASKRABBIT</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            {/* drop down for select the role  */}
            <div>
              <label htmlFor="role" className="block mb-2 text-sm">
                Role
              </label>
              <select
                name="role"
                id="role"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                required
              >
                <option value="">Select Your Role</option>
                <option value="Worker">Worker</option>
                <option value="TaskCreator">TaskCreator</option>
              </select>
            </div>
            {/*  */}
          </div>

          <div>
            <button
              // disabled={loading}
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              {/* {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Continue'
              )} */}
              Register
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
