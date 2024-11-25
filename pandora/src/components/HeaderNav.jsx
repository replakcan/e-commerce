import { useHistory, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import Heading from "./ui/heading";
import { useDispatch, useSelector } from "react-redux";
import ShopButtonWithDropdown from "./ShopButtonWithDropdown";
import CartButton from "./ui/shopCartbtn";
import md5 from "crypto-js/md5";
import { LogIn, LogOut, UserPlus, Home } from "lucide-react";
import { setUser } from "@/redux/actions/clientActions";
import HamburgerMenu from "./MenuHamburger";

const HeaderNav = () => {
  const user = useSelector((store) => store.client.user);
  let history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const getGravatarUrl = (email) => {
    const hash = md5(email.trim().toLowerCase()).toString();
    return `https://www.gravatar.com/avatar/${hash}`;
  };

  const gravatarUrl = user && user.email ? getGravatarUrl(user.email) : null;

  const logOut = () => {
    dispatch(setUser({}));
    history.push("/");
    localStorage.removeItem("token");
  };

  return (
    <div className="text-brilliant flex flex-col items-center md:flex-row md:px-[10%] p-9 md:py-0 relative bg-dune">
      <div className="header-nav flex justify-between items-center gap-4 w-full">
        <Heading variant="h3" className="text-[#26C2A3]">
          E-commencero
        </Heading>
        <div className="loggedIn flex items-center">
          {Object.keys(user).length > 0 && (
            <div className="flex gap-2 items-center border rounded transition-colors duration-300">
              <img
                className="max-w-[45px]"
                src={gravatarUrl}
                alt="User Avatar"
              />
              <p className="hidden lg:block text-brilliant font-bold">
                {user.name}
              </p>
            </div>
          )}
          <div className="absolute right-0 md:right-[5%]">
            <HamburgerMenu />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-12 md:py-3 items-center gap-3">
        {location.pathname !== "/" && (
          <Button
            onClick={() => history.push("/")}
            className="text-black font-bold"
            variant="link"
            size="icon"
          >
            <Home />
          </Button>
        )}
        <div className="flex">
          <div className="flex items-center">
            {Object.keys(user).length === 0 ? (
              <div className="flex items-center">
                <Button
                  onClick={() => history.push("/signup")}
                  className="text-black font-bold"
                  variant="link"
                  size="sm"
                >
                  <UserPlus />
                  Sign Up
                </Button>
                <p className="text-black font-bold">/</p>
                <Button
                  onClick={() => history.push("/login")}
                  className="text-black font-bold"
                  variant="link"
                  size="sm"
                >
                  <LogIn />
                  Login
                </Button>
              </div>
            ) : (
              <Button
                onClick={logOut}
                variant="link"
                size="sm"
                className="flex items-center text-black hover:text-brilliant"
              >
                <LogOut />
                <p className="text-black font-bold hover:text-brilliant">
                  Log Out
                </p>
              </Button>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <Button
            onClick={() => history.push("/shop")}
            variant="link"
            size="sm"
            className="text-black font-bold -mr-5"
          >
            Shop
          </Button>
          <ShopButtonWithDropdown className="" />
        </div>
        <CartButton />

        {Object.keys(user).length > 0 && (
          <Button
            size=""
            variant="outline"
            onClick={() => history.push("/previous-orders")}
          >
            prevOrders
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeaderNav;
