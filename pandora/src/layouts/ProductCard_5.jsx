import ShopItemVer from "@/components/ShopItemVer";
import Heading from "@/components/ui/heading";

const ProductCard_5 = () => {

    return (
            //TODO heading hizala
        <section>
            <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
            <div className="flex flex-wrap items-center justify-around gap-2 md:flex-row">
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
                <ShopItemVer />
            </div>
        </section>
    )


}
export default ProductCard_5;