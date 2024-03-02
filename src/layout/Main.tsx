import { Link, Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import MainButton from "../components/Buttons/MainButton";
import TrendsCard from "../components/Ui/Card/TrendsCard/TrendsCard";
import Font from "../components/icons/Font";

const Main = () => {
  return (
    <div className="container   max-w-[1280px] mx-auto ">
      <Navbar />
      <div className="md:flex justify-between w-full mt-20 px-2 ">
        <div className=" w-2/12 border border-primary p-2 h-screen sticky top-24">
          <ul>
            <li className="border-l-4 p-2 border-primary my-2">
              <Link to="/" className="text-primary flex space-x-2 items-center">
                <Font iconName="fa-house" /> <span>Home</span>
              </Link>
            </li>
            <li className="p-2 my-2">
              <Link to="/" className="text-primary flex space-x-2 items-center">
                <Font iconName="fa-bell" /> <span>Notification</span>
              </Link>
            </li>
            <li className="p-2 my-2">
              <Link to="/" className="text-primary flex space-x-2 items-center">
                <Font iconName="fa-address-card" /> <span>About</span>
              </Link>
            </li>
            <li className="p-2 my-2">
              <Link to="/" className="text-primary flex space-x-2 items-center">
                <Font iconName="fa-comment" /> <span>Messages</span>
              </Link>
            </li>
            <li className="p-2 my-2">
              <Link to="/" className="text-primary flex space-x-2 items-center">
                <Font iconName="fa-shield-halved" /> <span>Sicurity</span>
              </Link>
            </li>
            <li className="p-2 my-2">
              <Link to="/" className="text-primary flex space-x-2 items-center">
                <Font iconName="fa-outdent" /> <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-6/12   mx-2 px-2">
          <Outlet />
        </div>
        <div className=" w-4/12 border border-primary p-2 h-screen sticky top-24 overflow-y-scroll">
          <div className="bg-gray py-2 px-4 rounded">
            <h2 className="font-bold text-large">Premium</h2>
            <p className="my-2">
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </p>
            <MainButton path="/" content="Subscribe" />
          </div>
          <div className="bg-gray py-2 px-4 rounded mt-10">
            <h2 className="font-bold text-large">Trends</h2>
            <TrendsCard />
            <TrendsCard />
            <TrendsCard />
            <TrendsCard />
            <TrendsCard />
            <TrendsCard />
            <TrendsCard />
            <TrendsCard />
            <TrendsCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
