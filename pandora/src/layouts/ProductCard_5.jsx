import BestSellerCard from "@/components/BestSellerCard";
import ShopItemVer from "@/components/ShopItemVer";
import Heading from "@/components/ui/heading";

const ProductCard_5 = () => {

    return (
            //TODO heading hizala
        <div className="text-center">
            <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
            <div className="flex flex-wrap items-center justify-center md:flex-row ">
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
            </div>
        </div>
    )


}
export default ProductCard_5;