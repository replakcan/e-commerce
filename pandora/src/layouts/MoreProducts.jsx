import ShopPageCard from "@/components/ShopPageCard";
import Heading from "@/components/ui/heading";

const MoreProducts = () => {

    return (
        <>
            <div className="m-auto md:px-[10%] bg-light_gray">

                <Heading className="">BESTSELLER PRODUCTS</Heading>
            </div>
            <div className="bg-light_gray md:px-[10%] flex flex-wrap justify-center md:justify-between gap-3">
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />

            </div>
        </>
    )
}

export default MoreProducts;