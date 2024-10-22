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
        <section>
            <HeaderSlider/>
            <ShopCard />
            <ProductCard_1 />
            <ProductCard_2 />
            <ProductCard_3 />
            <ProductCard_4 />
            <ProductCard_5 />
            <Clients />
            <Blog />
        </section>
    )

}
export default HomeContent;