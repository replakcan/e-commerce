import ShopItemVer from "@/components/ShopItemVer";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ProductCard_1 = () => {


    return (

        <div className="productCard flex flex-col md:grid md:grid-cols-3 md:grid-rows-[min-content_1fr]">
            <img className=" md:col-start-1 col-end-2 md:row-span-full bg-center bg-no-repeat w-full h-full" src="./images/productCard/card-cover-5.png" />
            <nav className="productNav flex flex-col items-center md:col-start-2 col-end-4 md:row-span-1 md:flex-row md:justify-between md:px-7 md:py-6 border-b-1 border-blue-500 gap-6 pt-24 flex-wrap pb-12">
                <div className="flex flex-col md:flex-row items-center justify-between grow">
                    <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
                    <div className="flex gap-8">
                        <a href="">Men</a>
                        <a href="">Women</a>
                        <a href="">Accessories</a>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" size="icon"><ChevronLeft /></Button>
                    <Button variant="outline" size="icon"><ChevronRight /></Button>
                </div>
            </nav>
            <div className="productContent flex flex-col items-center flex-wrap md:col-span-2 md:flex-row md:justify-between pt-2 md:pl-7 gap-7 md:gap-0">
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