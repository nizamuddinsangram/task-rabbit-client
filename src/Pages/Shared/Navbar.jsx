import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/watch">Watch Video</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className=" text-xl font-black">
          TASKRABBIT
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {!user && (
            <>
              {" "}
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {/* {!user && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )} */}
          <li>
            <Link to="/watch">Watch Video</Link>
          </li>
          <li>
            <Link to="/dashboard/workerHome">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={handleLogout} className="mx-3 btn btn-sm">
          LogOut
        </button>
        <img
          src={user?.photoURL}
          alt="image"
          className="w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
