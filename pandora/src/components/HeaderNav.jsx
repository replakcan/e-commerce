import { useHistory } from "react-router-dom";
import { Button } from "./ui/button";
import Heading from "./ui/heading";
import { useSelector } from "react-redux";
import ShopButtonWithDropdown from "./ShopButtonWithDropdown";
import CartButton from "./ui/shopCartbtn";
import md5 from 'crypto-js/md5';



//TODO CSS'I DUZELT
const HeaderNav = () => {
    const user = useSelector((store) => store.client.user)
    let history = useHistory();

    const getGravatarUrl = (email) => {
        const hash = md5(email.trim().toLowerCase()).toString();
        return `https://www.gravatar.com/avatar/${hash}`;
    };

    const gravatarUrl = user && user.email ? getGravatarUrl(user.email) : null;


    return (
        <div className="flex flex-col items-center md:flex-row bg-white md:px-[10%] shadow-md p-9 md:py-0">
            <div className="header-nav flex justify-between items-center gap-4 w-full">
                <Heading variant="h3">Pandora</Heading>
                <ul className="flex gap-4 md:pr-4">
                    <i className="fa-regular fa-user"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-solid fa-bars"></i>
                </ul>
            </div>
            <div className="flex flex-col  md:flex-row py-12 md:py-3 items-center">
                <Button onClick={() => history.push("/signup")} variant="ghost" size="sm" className="md:text-ikincil">SignUp</Button>
                <Button onClick={() => history.push("/")} variant="ghost" size="sm" className="md:text-ikincil">Home</Button>
                <div className="flex gap-0 border border-black">
                    <Button onClick={() => history.push("/shop")} variant="ghost" size="sm" className="md:text-ikincil">Shop </Button>
                    <ShopButtonWithDropdown />
                </div>
                <Button onClick={() => history.push("/about")} variant="ghost" size="sm" className="md:text-ikincil">About</Button>
                <Button onClick={() => history.push("/contact")} variant="ghost" size="sm" className="md:text-ikincil">Contact</Button>
                <Button onClick={() => history.push("/team")} variant="ghost" size="sm" className="md:text-ikincil">Team</Button>
                {Object.keys(user).length === 0 && <Button onClick={() => history.push("/login")} variant="ghost" size="sm" className="md:text-ikincil">Login</Button>}
                <CartButton />
                {Object.keys(user).length > 0 && <div className="">
                    <img src={gravatarUrl} alt="User Avatar" />
                    <p>
                        {user.name}
                    </p>
                </div>}
            </div>
        </div>

    )
}
export default HeaderNav;