import { useHistory, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import Heading from "./ui/heading";
import { useDispatch, useSelector } from "react-redux";
import ShopButtonWithDropdown from "./ShopButtonWithDropdown";
import CartButton from "./ui/shopCartbtn";
import md5 from 'crypto-js/md5';
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
        <div className="text-brilliant flex flex-col items-center md:flex-row md:px-[10%] p-9 md:py-0 relative bg-kum">
            <div className="header-nav flex justify-between items-center gap-4 w-full">
                <Heading variant="h3" className="text-[#26C2A3]">E-commencero</Heading>
            </div>
            <div className="flex flex-col md:flex-row py-12 md:py-3 items-center gap-3">
                {location.pathname !== "/" && (
                    <Button onClick={() => history.push("/")} className="" variant="link" size="sm"><Home /></Button>
                )}
                <div className="flex">
                    <div className="flex items-center">
                        {Object.keys(user).length === 0 ?
                            <div className="flex items-center ">
                                <Button onClick={() => history.push("/signup")} variant="link" size="sm"><UserPlus />Sign Up</Button>
                                <p className="text-brilliant">/</p>
                                <Button onClick={() => history.push("/login")} variant="link" size="sm"><LogIn />Login</Button>
                            </div> :
                            <Button onClick={logOut} variant="link" size="sm" className="flex items-center">
                                <LogOut />
                                <p className="text-brilliant">Log Out</p>
                            </Button>
                        }
                    </div>
                </div>
                <div className="flex items-center ">
                    <Button onClick={() => history.push("/shop")} variant="link" size="sm">Shop</Button>
                    <ShopButtonWithDropdown />
                </div>
                <CartButton />
                <HamburgerMenu />
                {Object.keys(user).length > 0 && (
                    <div className="flex items-center">
                        <img src={gravatarUrl} alt="User Avatar" />
                        <p>{user.name}</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default HeaderNav;
