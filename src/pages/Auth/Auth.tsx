import { useEffect, useState } from "react";
import Register from "../../components/Ui/Auth/Register/Register";
import Login from "../../components/Ui/Auth/Login/Login";
import { Link, useNavigate } from "react-router-dom";
import Font from "../../components/icons/Font";
import { isLoggedIn } from "../../services/authService";

const Auth = () => {
  // Navigate If User logged In
  const navigate = useNavigate();
  const loggedUser = isLoggedIn();

  useEffect(() => {
    if (loggedUser) {
      navigate("/profile");
    }
  }, [loggedUser]);

  // Set log/sign up stats
  const [register, setRegister] = useState(false);
  return (
    <div className="bg-secondary  relative  h-full container   max-w-[1280px] mx-auto text-white md:flex items-center">
      <div className="w-full   overflow-hidden">
        <div className="absolute top-0">
          <button
            onClick={() => {
              setRegister(!register);
            }}
            type="submit"
            className="w-full my-10 group overflow-hidden flex justify-center items-center relative   bg-white px-6 py-4 text-base text-black font-semibold  rounded-r-full"
          >
            <span>{register ? "Log In" : "Register"}</span>{" "}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gray opacity-40 group-hover:animate-shine" />
          </button>
        </div>
        {/* Home Button */}
        <div className="absolute top-0 right-0">
          <button
            type="submit"
            className="w-full my-10 group overflow-hidden flex justify-center items-center relative   bg-white px-6 py-4 text-base text-black font-semibold  rounded-l-full"
          >
            <Link to="/">
              <span>Home</span>{" "}
              <span className="ml-2">
                {" "}
                <Font iconName="fa-house"></Font>
              </span>
            </Link>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gray opacity-40 group-hover:animate-shine" />
          </button>
        </div>
        {/* Log In */}
        {!register && <Login />}

        {/* Sign Up */}
        {register && <Register setRegister={setRegister} />}
      </div>{" "}
    </div>
  );
};

export default Auth;
