import ShopItemVer from "@/components/ShopItemVer";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const ProductCard_3 = () => {


    return (

        <section className="productCard flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-[min-content_1fr]">
            <img className=" lg:col-start-3 lg:row-span-full bg-center bg-no-repeat" src="./src/assets/productCard/col-md-4.png" />
            <nav className="productNav flex flex-col items-center lg:col-span-2 lg:row-span-1 lg:flex-row lg:justify-between">
                <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
                <div className="flex gap-8">
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">Accessories</a>
                </div>
                <div>
                    <Button variant="icon">PREV</Button>
                    <Button variant="icon">NEXT</Button>
                </div>
            </nav>
            <div className="productContent flex flex-col items-center flex-wrap lg:col-span-2 lg:flex-row lg:justify-between">
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
            </div>

        </section>
    )
}

export default ProductCard_3;