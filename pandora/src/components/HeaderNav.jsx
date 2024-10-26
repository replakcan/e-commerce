import { useHistory } from "react-router-dom";
import { Button } from "./ui/button";
import Heading from "./ui/heading";
import { useSelector } from "react-redux";


//TODO CSS'I DUZELT
const HeaderNav = () => {
    const user = useSelector((store) => store.client.user)

    let history = useHistory();

    return (
        <div className="flex flex-col items-center md:flex-row bg-white md:px-[10%] shadow-md p-9 md:p-0">
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
                {Object.keys(user).length > 0 && <p>USER</p>}
                <Button onClick={() => history.push("/signup")} variant="ghost" size="sm" className="md:text-ikincil">SignUp</Button>
                <Button onClick={() => history.push("/")} variant="ghost" size="sm" className="md:text-ikincil">Home</Button>
                <Button onClick={() => history.push("/shop")} variant="ghost" size="sm" className="md:text-ikincil">Shop</Button>
                <Button onClick={() => history.push("/product")} variant="ghost" size="sm" className="md:text-ikincil">Product</Button>
                <Button onClick={() => history.push("/about")} variant="ghost" size="sm" className="md:text-ikincil">About</Button>
                <Button onClick={() => history.push("/contact")} variant="ghost" size="sm" className="md:text-ikincil">Contact</Button>
                <Button onClick={() => history.push("/team")} variant="ghost" size="sm" className="md:text-ikincil">Team</Button>
                {Object.keys(user).length === 0 && <Button onClick={() => history.push("/login")} variant="ghost" size="sm" className="md:text-ikincil">Login</Button>}
            </div>
        </div>

    )
}
export default HeaderNav;