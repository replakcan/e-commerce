import ShopItemVer from "@/components/ShopItemVer";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ProductCard_1 = () => {


    return (

        <div className="productCard flex flex-col md:grid md:grid-cols-3 md:grid-rows-[min-content_1fr]">
            <img className=" md:col-start-1 col-end-2 md:row-span-full bg-center bg-no-repeat w-full h-full" src="./images/productCard/card-cover-5.png" />
            <nav className="productNav flex flex-col items-center md:col-start-2 col-end-4 md:row-span-1 md:flex-row md:justify-between px-7">
                <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
                <div className="flex gap-8">
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">Accessories</a>
                </div>
                <div>
                    <Button variant="outline" size="icon"><ChevronLeft /></Button>
                    <Button variant="outline" size="icon"><ChevronRight /></Button>
                </div>
            </nav>
            <div className="productContent flex flex-col items-center flex-wrap md:col-span-2 md:flex-row justify-between">
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
            </div>

        </div>
    )
}

export default ProductCard_1;