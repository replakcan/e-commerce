import ShopItem from "@/components/ShopItem";

//TODO ShopCard ismini Content olarak degistir proje bittiginde.
const ShopCard = () => {


    return (
        <section className="shop-card flex flex-col  md:flex-row md:justify-between items-center gap-2">
            <ShopItem />
            <ShopItem />
            <ShopItem />
        </section>
    )
}

export default ShopCard;