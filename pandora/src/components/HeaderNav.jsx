import { useHistory, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import Heading from "./ui/heading";
import { useDispatch, useSelector } from "react-redux";
import ShopButtonWithDropdown from "./ShopButtonWithDropdown";
import CartButton from "./ui/shopCartbtn";
import md5 from 'crypto-js/md5';
import { LogIn, LogOut, UserPlus, Menu, Home } from "lucide-react";
import { useState } from "react";
import { setUser } from "@/redux/actions/clientActions";
import HamburgerMenu from "./MenuHamburger";

const HeaderNav = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
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
        <div className="flex flex-col items-center md:flex-row bg-white md:px-[10%] shadow-md p-9 md:py-0 relative">
            <div className="header-nav flex justify-between items-center gap-4 w-full">
                <Heading variant="h3">Pandora</Heading>
                <ul className="flex gap-4 md:pr-4">
                </ul>
            </div>
            <div className="flex flex-col md:flex-row py-12 md:py-3 items-center">
                {location.pathname !== "/" && (
                    <Button onClick={() => history.push("/")} variant="ghost" size="sm" className="md:text-ikincil"><Home /></Button>
                )}
                <div className="flex border border-danger">
                    <div className="flex items-center">
                        {Object.keys(user).length === 0 ?
                            <>
                                <Button onClick={() => history.push("/signup")} variant="ghost" size="sm" className="md:text-ikincil"><UserPlus />Sign Up</Button>
                                <p>/</p>
                                <Button onClick={() => history.push("/login")} variant="ghost" size="sm" className="md:text-ikincil"><LogIn />Login</Button>
                            </> :
                            <Button onClick={logOut} variant="ghost" size="sm" className="flex items-center">
                                <LogOut />
                                <p>Log Out</p>
                            </Button>
                        }
                    </div>
                </div>
                <div className="flex border border-black">
                    <Button onClick={() => history.push("/shop")} variant="ghost" size="sm" className="md:text-ikincil">Shop</Button>
                    <ShopButtonWithDropdown />
                </div>
                <CartButton />
                {Object.keys(user).length > 0 && (
                    <div className="">
                        <img src={gravatarUrl} alt="User Avatar" />
                        <p>{user.name}</p>
                    </div>
                )}

                {/* Hamburger Menu Button */}
                <HamburgerMenu />

            </div>
        </div>
    );
};

export default HeaderNav;
