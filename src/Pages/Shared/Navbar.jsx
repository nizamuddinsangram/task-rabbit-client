import { FaCoins } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const data = [];

  const { user, logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
  };
  const handleWatchDemo = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=ZYaZ6Odbx_Y&ab_channel=AYAT";
  };
  return (
    <div className="navbar bg-[#005149] text-white rounded-lg p-4">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {!user ? (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#FFBF00] text-[#005149] rounded-md px-2 py-1"
                        : "hover:bg-[#FFC107] hover:text-[#005149] rounded-md px-2 py-1 transition-colors"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#FFBF00] text-[#005149] rounded-md px-2 py-1"
                        : "hover:bg-[#FFC107] hover:text-[#005149] rounded-md px-2 py-1 transition-colors"
                    }
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleWatchDemo}
                    to="/watch"
                    className="btn btn-sm bg-[#005149] text-white rounded-lg hover:bg-[#FFC107] transition-colors"
                  >
                    Watch Demo
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#FFBF00] text-[#005149] rounded-md px-2 py-1"
                        : "btn btn-sm bg-[#005149] text-white rounded-lg hover:bg-[#FFC107]   px-2 py-1 transition-colors"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="btn btn-sm bg-[#005149] text-white rounded-lg hover:bg-[#FFC107]   px-2 py-1 transition-colors">
                  Coins {data ? data.coins : 0}
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm bg-[#005149] text-white rounded-lg hover:bg-[#FFC107] transition-colors"
                  >
                    LogOut
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink to="/" className="text-xl font-black text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FF6347] to-[#FFBF00]">
            TASKRABBIT
          </span>
        </NavLink>
      </div>
      {/* navbar  */}
      <div className="navbar-end hidden  lg:flex items-center">
        {!user ? (
          <ul className="menu   menu-horizontal px-1">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#FFBF00] text-[#005149] rounded-md px-2 py-1"
                    : " hover:text-[#005149] rounded-md px-2 py-1 transition-colors"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? " text-[#fffff] bg-teal-950 rounded-md px-2 py-1"
                    : "hover:bg-[#FFC107] hover:text-[#005149] rounded-md px-2 py-1 "
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleWatchDemo}
                to="/watch"
                className="btn btn-sm bg-[#005149] text-white rounded-lg hover:bg-[#FFC107] transition-colors"
              >
                Watch Demo
              </button>
            </li>
          </ul>
        ) : (
          <>
            <span className="mr-8 flex justify-between items-center">
              <FaCoins className="mx-2" />
              Coins {data ? data.coins : 0}
            </span>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FFBF00] text-[#005149] rounded-md px-2 py-1 mr-4"
                  : "hover:bg-[#FFC107] hover:text-[#005149] rounded-md px-2 py-1 transition-colors mr-4"
              }
            >
              Dashboard
            </NavLink>
            <div className="dropdown  z-10  dropdown-end">
              <div
                tabIndex={0}
                className="avatar placeholder btn btn-ghost btn-circle"
              >
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10 h-10 border-2 border-[#FFC107] animate-border">
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
              >
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm bg-[#005149] text-white rounded-lg hover:bg-[#FFC107] transition-colors"
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
// <div className="navbar  bg-[#005149] text-white rounded-lg p-4">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div
//         tabIndex={0}
//         role="button"
//         className="btn btn-ghost lg:hidden text-white"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
//       >
//         {!user ? (
//           <>
//             <li>
//               <NavLink
//                 to="/login"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#005149]" : ""
//                 }
//               >
//                 login
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/register"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#005149]" : ""
//                 }
//               >
//                 Register
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/watch" activeClassName="text-[#005149]">
//                 Watch Demo
//               </NavLink>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#005149]" : ""
//                 }
//               >
//                 Dashboard
//               </NavLink>
//             </li>
//           </>
//         )}
//       </ul>
//     </div>
//     <NavLink to="/" className="text-xl font-black text-white">
//       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FF6347] to-[#FFBF00]">
//         TASKRABBIT
//       </span>
//     </NavLink>
//   </div>
//   <div className="navbar-end flex items-center">
//     {!user ? (
//       <ul className="menu menu-horizontal px-1">
//         <li>
//           <NavLink to="/login" activeClassName="text-[#FFC107]">
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/register" activeClassName="text-[#FFC107]">
//             Register
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/watch" activeClassName="text-[#FFC107]">
//             Watch Demo
//           </NavLink>
//         </li>
//       </ul>
//     ) : (
//       <>
//         <span className="mr-8 flex justify-between items-center">
//           <FaCoins className="mx-2" />
//           Coins:
//         </span>
//         <NavLink
//           to="/dashboard"
//           activeClassName="text-[#FFC107]"
//           className="mr-4"
//         >
//           Dashboard
//         </NavLink>
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             className="avatar placeholder btn btn-ghost btn-circle"
//           >
//             <div className="bg-neutral-focus text-neutral-content rounded-full w-10 h-10 border-2 border-[#FFC107]">
//               <img
//                 src={user?.photoURL}
//                 alt="User"
//                 className="rounded-full w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
//           >
//             <li>
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-sm bg-[#005149] text-white rounded-lg"
//               >
//                 LogOut
//               </button>
//             </li>
//           </ul>
//         </div>
//       </>
//     )}
//   </div>
// </div>
