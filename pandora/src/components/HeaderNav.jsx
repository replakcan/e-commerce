import { useHistory } from "react-router-dom";
import Button from "./ui/button";
import Heading from "./ui/heading";


//TODO CSS'I DUZELT
const HeaderNav = () => {

    let history = useHistory();

    return (
        <div className="flex flex-col items-center md:flex-row bg-ikincil md:py-3 md:px-[10%]">
            <div className="header-nav flex justify-between items-center gap-4 w-full">
                <Heading variant="h3">Pandora</Heading>
                <ul className="flex gap-4 md:pr-4">
                    <i className="fa-regular fa-user"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-solid fa-bars"></i>
                </ul>
            </div>
            <div className="flex flex-col gap-2 md:flex-row py-12 md:py-3">
                <Button onClick={() => history.push("/")} variant="ghost" className="md:text-birincil">Home</Button>
                <Button onClick={() => history.push("/shop")} variant="ghost" className="md:text-birincil">Shop</Button>
                <Button onClick={() => history.push("/product")} variant="ghost" className="md:text-birincil">Product</Button>
                <Button onClick={() => history.push("/about")} variant="ghost" className="md:text-birincil">About</Button>
                <Button onClick={() => history.push("/contact")} variant="ghost" className="md:text-birincil">Contact</Button>
                <Button onClick={() => history.push("/team")} variant="ghost" className="md:text-birincil">Team</Button>
            </div>
        </div>

    )
}
export default HeaderNav;