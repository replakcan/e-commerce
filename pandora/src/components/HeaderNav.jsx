import Heading from "./ui/heading";


//TODO CSS'I DUZELT
const HeaderNav = () => {

    return (
        <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="header-nav flex justify-between items-center gap-4 w-full">
                <Heading variant="h3">Pandora</Heading>
                <ul className="flex gap-4">
                    <i class="fa-regular fa-user"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-bars"></i>
                </ul>
            </div>
            <div className="flex flex-col gap-2 lg:flex-row">
                <a className="lg:text-birincil">Home</a>
                <a className="lg:text-birincil">Product</a>
                <a className="lg:text-birincil">Pricing</a>
                <a className="lg:text-birincil">Contact</a>
            </div>
        </div>

    )
}
export default HeaderNav;