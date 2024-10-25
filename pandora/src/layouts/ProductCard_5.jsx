import BestSellerCard from "@/components/BestSellerCard";
import ShopItemVer from "@/components/ShopItemVer";
import Heading from "@/components/ui/heading";

const ProductCard_5 = () => {

    return (
        //TODO heading hizala
        <div className="text-center bg-light_gray md:px-[10%]">
            <div className="py-12 md:text-left">
                <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
            </div>
            <div className="flex flex-wrap items-center justify-center md:flex-row gap-7 md:gap-0 pb-12">
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
            </div>
        </div>
    )


}
export default ProductCard_5;