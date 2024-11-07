import ShopItemVer from "@/components/ShopItemVer";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { fetchProductDetails } from "@/redux/actions/productActions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductCard_3 = ({ products }) => {

    const [altLimit, setAltLimit] = useState(0);
    const [ustLimit, setUstLimit] = useState(6);

    const setLimitsUp = () => {
        if (!(ustLimit === 24)) {
            setAltLimit((altLimit) => altLimit + 6);
            setUstLimit((ustLimit) => ustLimit + 6);
        }
    }

    const setLimitsDown = () => {
        if (!(altLimit === 0)) {
            setAltLimit((altLimit) => altLimit - 6);
            setUstLimit((ustLimit) => ustLimit - 6);
        }
    }

    const mostSoldProducts = [...products].sort((a, b) => b.rating - a.rating).slice(altLimit, ustLimit);

    const dispatch = useDispatch();
    const history = useHistory();
    const categories = useSelector((store) => store.product.categories);

    const handleProductClick = (product) => {
        const productNameSlug = product.name.replace(/\s+/g, '-').toLowerCase();

        const category = categories.find((cat) => cat.id === product.category_id);
        const categoryName = category.code.slice(2);

        dispatch(fetchProductDetails(product.id));
        history.push(`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${categoryName}/${product.category_id}/${productNameSlug}/${product.id}`);
    };
    return (
        <div className="productCard flex flex-col md:grid md:grid-cols-3 md:grid-rows-[min-content_1fr]">
            <img className=" md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 md:w-full h-full" src="./images/productCard/col-md-4.png" />
            <nav className="productNav flex flex-col items-center md:col-span-2 md:row-span-1 md:flex-row md:justify-between md:px-7 md:py-6 gap-6 flex-wrap pt-24 pb-12">
                <div className="flex flex-col md:flex-row items-center justify-between grow">
                    <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
                    <div className="flex gap-8">
                        <a href="">Men</a>
                        <a href="">Women</a>
                        <a href="">Accessories</a>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button
                        onClick={setLimitsDown}
                        variant="outline" size="icon"><ChevronLeft />
                    </Button>
                    <Button
                        onClick={setLimitsUp}
                        variant="outline" size="icon"><ChevronRight />
                    </Button>
                </div>
            </nav>
            <div className="productContent flex flex-wrap md:col-start-1 md:col-end-3 md:flex-row md:justify-between row-start-2 row-end-3 justify-center md:pr-7 gap-7 md:gap-0 pt-2">
                {mostSoldProducts?.map((msp, index) => {
                    return <ShopItemVer
                        src={msp.images[0].url}
                        description={msp.description}
                        onClick={() => handleProductClick(msp)}
                        price={msp.price}
                        name={msp.name}
                        key={index} />
                })}
            </div>

        </div>
    )
}

export default ProductCard_3;