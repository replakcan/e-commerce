import HeaderSlider from "@/components/HeaderSlider";
import Blog from "../Blog";
import Clients from "../Clients";
import ProductCard_1 from "../ProductCard_1";
import ProductCard_2 from "../ProductCard_2";
import ProductCard_3 from "../ProductCard_3";
import ProductCard_4 from "../ProductCard_4";
import ProductCard_5 from "../ProductCard_5";
import ShopCard from "../ShopCard";

const HomeContent = () => {

    return (
        <div className="content flex flex-col gap-20">
            <HeaderSlider />
            <ShopCard />
            <section className="flex flex-col gap-20">
                <ProductCard_1 />
                <ProductCard_2 />
                <ProductCard_3 />
                <ProductCard_4 />
            </section>
            <div>
                <ProductCard_5 />
                <Clients />
            </div>
            <section>
                <Blog />
            </section>
        </div>
    )

}
export default HomeContent;