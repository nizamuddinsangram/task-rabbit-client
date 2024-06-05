import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#005149] mb-10 text-white py-6 text-center">
      <div className="mb-4">
        {/* Replace with your actual logo */}
        <NavLink to="/" className="text-xl font-black text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FF6347] to-[#FFBF00]">
            TASKRABBIT
          </span>
        </NavLink>
      </div>
      <div className="text-2xl flex justify-center space-x-4">
        {/* Internal Links */}
        <Link to="/linkedin" className="text-white hover:text-blue-500">
          <FaLinkedin />
        </Link>
        <Link to="/facebook" className="text-white hover:text-blue-600">
          <FaFacebook />
        </Link>
        <Link to="/github" className="text-white hover:text-gray-500">
          <FaGithub />
        </Link>
        {/* External Links (For actual social media profiles) */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500"
        >
          <FaGithub />
        </a>
      </div>
      <aside className="my-6">
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
