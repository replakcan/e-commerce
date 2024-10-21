import ShopPageCard from "@/components/ShopPageCard";
import Heading from "@/components/ui/heading";

const MoreProducts = () => {

    return (
        <>
            <div className="m-auto">

                <Heading className="">BESTSELLER PRODUCTS</Heading>
            </div>
            <section className="flex flex-wrap justify-center md:justify-between gap-3">
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />
                <ShopPageCard />

            </section>
        </>
    )
}

export default MoreProducts;