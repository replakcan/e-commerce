import ShopItemVer from "@/components/ShopItemVer";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const ProductCard_3 = () => {


    return (

        <section className="productCard flex flex-col md:grid md:grid-cols-3 md:grid-rows-[min-content_1fr]">
            <img className=" md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 md:w-full h-full" src="./src/assets/productCard/col-md-4.png" />
            <nav className="productNav flex flex-col items-center md:col-span-2 md:row-span-1 md:flex-row md:justify-between">
                <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
                <div className="flex gap-8">
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">Accessories</a>
                </div>
                <div>
                    <Button variant="icon"><i class="fa-solid fa-arrow-left"></i></Button>
                    <Button variant="icon"><i class="fa-solid fa-arrow-right"></i></Button>
                </div>
            </nav>
            <div className="productContent flex flex-wrap md:col-start-1 md:col-end-3 md:flex-row md:justify-between row-start-2 row-end-3">
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