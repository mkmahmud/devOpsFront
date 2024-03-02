import { useState, useEffect } from "react";
import logo from "../../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Font from "../../icons/Font";
import MainButton from "../../Buttons/MainButton";
import { isLoggedIn, removeUserInfo } from "../../../services/authService";

const Navbar = () => {
  // User logged data

  const loggedUser = isLoggedIn();

  const navigate = useNavigate();

  // Sticky Navbar
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   Menus

  // Handel Logout
  const handelLogout = () => {
    removeUserInfo("access_token");
    navigate("/auth");
  };

  return (
    <div
      className={`container  fixed top-0 w-full z-10  mx-auto p-4 max-w-[1280px] ${
        isSticky ? " bg-white " : ""
      }`}
    >
      <nav className="flex items-center justify-between w-full">
        <div className="text-2xl font-bold w-2/12">
          <Link to="/">
            <img src={logo} className="h-10" alt="" />
          </Link>
        </div>
        {/* Desktop Menus */}
        <div className="  md:flex items-center w-6/12 px-2 ">
          <div className="w-3/12">
            <Link
              to="/"
              className="hover:text-primary flex items-center text-base "
            >
              <span className="mx-2 text-xl font-bold border-b-4 border-primary">
                For You
              </span>
            </Link>
          </div>
          <div className="w-9/12">
            <input
              type="text"
              name=""
              className="text-base w-full border text-lg py-2 rounded-full border-primary pl-6 "
              placeholder="Search........."
              id=""
            />
          </div>
        </div>
        <ul className="w-4/12  flex  justify-end  ">
          <li className="">
            {loggedUser ? (
              <button
                onClick={() => {
                  handelLogout();
                }}
                className=" group overflow-hidden flex justify-center items-center relative   bg-primary px-6 py-4 text-base text-white font-semibold  rounded-full"
              >
                <div className="flex items-center">
                  <span className="mr-4 rotate-180">
                    <Font iconName="fa-right-to-bracket"></Font>{" "}
                  </span>
                  <span>Log Out</span>{" "}
                </div>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-primaryHover opacity-40 group-hover:animate-shine" />
              </button>
            ) : (
              <MainButton
                path="/auth"
                content="log in / sign up"
                icon="fa-right-to-bracket"
              ></MainButton>
            )}
          </li>
        </ul>
        {/* Mobile Menu */}
      </nav>
    </div>
  );
};

export default Navbar;
