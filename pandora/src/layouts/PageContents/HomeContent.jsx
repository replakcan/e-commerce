import HeaderSlider from "@/components/HeaderSlider";
import Blog from "../Blog";
import Clients from "../Clients";
import ProductCard_1 from "../ProductCard_1";
import ProductCard_2 from "../ProductCard_2";
import ProductCard_3 from "../ProductCard_3";
import ProductCard_4 from "../ProductCard_4";
import ProductCard_5 from "../ProductCard_5";
import ShopCard from "../ShopCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/actions/productActions";

const HomeContent = () => {
    const dispatch = useDispatch();
    const products = useSelector((store) => store.product.productList);
    const bestSeller = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
    const mostPopi = bestSeller[0];
    const mostPopi_2 = bestSeller[1];


    console.log("mostPopi:", mostPopi)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <div className="content flex flex-col gap-12">
            <div>
                <HeaderSlider />
                <ShopCard />
            </div>
            <section className="flex flex-col gap-12">
                <ProductCard_1 products={products} />
                <ProductCard_2 mostPopi_2={mostPopi_2} />
                <ProductCard_3 products={products} />
                <ProductCard_4 mostPopi={mostPopi} />
            </section>
            <div>
                <ProductCard_5 bestSeller={bestSeller} />
                <Clients />
            </div>
            <section>
                <Blog />
            </section>
        </div>
    )

}
export default HomeContent;