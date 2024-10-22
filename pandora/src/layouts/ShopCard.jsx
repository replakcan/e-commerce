import ShopItem from "@/components/ShopItem";

//TODO ShopCard ismini Content olarak degistir proje bittiginde.
const ShopCard = () => {


    return (
        <div className="shop-card flex flex-col  md:flex-row md:justify-between items-center gap-2 px-[10%] bg-light_gray">
            <ShopItem />
            <ShopItem />
            <ShopItem />
        </div>
    )
}

export default ShopCard;