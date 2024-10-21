import Heading from "./ui/heading";


//TODO CSS'I DUZELT
const HeaderNav = () => {

    return (
        <div className="flex flex-col items-center gap-10 md:flex-row bg-birincil">
            <div className="header-nav flex justify-between items-center gap-4 w-full">
                <Heading variant="h3">Pandora</Heading>
                <ul className="flex gap-4">
                    <i class="fa-regular fa-user"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-bars"></i>
                </ul>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
                <a href="" className="md:text-birincil">Home</a>
                <a href="" className="md:text-birincil">Shop</a>
                <a href="" className="md:text-birincil">Product</a>
                <a href="" className="md:text-birincil">Pricing</a>
                <a href="" className="md:text-birincil">Contact</a>
            </div>
        </div>

    )
}
export default HeaderNav;