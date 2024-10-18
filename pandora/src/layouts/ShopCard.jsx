import ShopItem from "@/components/ShopItem";


const ShopCard = () => {


    return (
        <section className="shop-card flex flex-col  lg:flex-row lg:justify-around items-center gap-2">
            <ShopItem />
            <ShopItem />
            <ShopItem />
        </section>
    )
}

export default ShopCard;