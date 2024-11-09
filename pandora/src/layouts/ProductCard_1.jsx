import ShopItemVer from "@/components/ShopItemVer";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { fetchProductDetails } from "@/redux/actions/productActions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductCard_1 = ({ products }) => {

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

    const mostSoldProducts = [...products].sort((a, b) => b.sell_count - a.sell_count).slice(altLimit, ustLimit);
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
        <div className="productCard flex flex-col lg:grid md:grid-cols-3 md:grid-rows-[min-content_1fr] border rounded-3xl overflow-hidden">
            <div className="md:col-start-1 col-end-2 md:row-span-full bg-brilliant">
                <img
                    className="w-full h-full object-cover object-[50%]"
                    src="./images/productCard/pexels-photo-794064.jpeg" />
            </div>
            <nav className="productNav flex flex-col items-center md:col-start-2 col-end-4 md:row-span-1 md:flex-row md:justify-between md:px-7 md:py-6 gap-6 pt-24 flex-wrap pb-12 border-b border-mars mx-7">
                <div className="flex flex-col md:flex-row items-center justify-between grow ">
                    <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
                </div>
                <div className="flex gap-3 justify-between">
                    <div>
                        <Button size="icon" className="text-mars" variant="link">men</Button>
                        <Button size="icon" className="text-mars" variant="link">women</Button>
                    </div>
                    <div>
                        <Button
                            disabled={altLimit === 0}
                            onClick={setLimitsDown}
                            variant="outline" size="icon"><ChevronLeft />
                        </Button>
                        <Button
                            disabled={ustLimit === 24}
                            onClick={setLimitsUp}
                            variant="outline" size="icon"><ChevronRight />
                        </Button>
                    </div>
                </div>
            </nav>
            <div className="productContent flex flex-col items-center flex-wrap md:col-span-2 md:flex-row md:justify-between pt-2 md:pl-7 gap-7 md:gap-0 md:pr-7">
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

export default ProductCard_1;