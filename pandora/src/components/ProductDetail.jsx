import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import Heading from "./ui/heading";
import { setCart } from "@/redux/actions/shoppingCartActions";
import { Eye, Heart, ShoppingCart, Star, StarHalf } from "lucide-react";


const ProductDetail = ({ src, name, sell_count, description, price, stock }) => {
    const dispatch = useDispatch();
    const fetchState = useSelector((store) => store.product.fetchState)
    const productToAdd = useSelector((store) => store.product.currentProduct);

    const handleAddToCart = () => {
        dispatch(setCart(productToAdd));
    };

    if (fetchState === 'FETCHING') {
        return <span className="loader"></span>;
    }

    if (fetchState === 'FAILED') {
        return <p>Failed to load products.</p>;
    }

    return (
        <div className="flex flex-col gap-2 md:flex-row bg-light_gray md:px-[10%] pb-12">
            <div className="flex flex-col gap-3 items-center">
                <div className="max-w-[500px]">
                    <img src={src} alt="" />
                </div>
                <div className="flex gap-4 pt-4 self-start pl-12 md:pl-0">
                    <img className="max-w-[100px] h-min" src={src} alt="" />
                    <img className="max-w-[100px] h-min" src={src} alt="" />
                </div>
            </div>
            <div className="pl-12 pt-5">
                <div className="flex flex-col gap-3">
                    <Heading variant="h2">{name}</Heading>
                    <div className="flex items-center gap-2">
                        <div className="flex gap-2">
                            <Star size={32} color="gold" />
                            <Star size={32} color="gold" />
                            <Star size={32} color="gold" />
                            <Star size={32} color="gold" />
                            <StarHalf size={32} color="gold" />
                        </div>
                        <p className="font-bold">Sell count: {sell_count}</p>
                    </div>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                    <Heading variant="h3" className="font-bold">${price}</Heading>
                    <p className="font-bold">Availability : <span className="text-ikincil text-xl">{stock} in stock</span></p>
                </div>
                <p className="pt-3 border-b-4 pb-2 md:w-3/4">{description}</p>
                <div className="flex items-center pt-4 gap-4 md:justify-start md:gap-4">
                    <Button onClick={handleAddToCart} >Add to Cart</Button>
                    <div className="flex gap-8">
                        <Heart size={40} className="border p-2 rounded-full" />
                        <ShoppingCart size={40} className="border p-2 rounded-full" />
                        <Eye size={40} className="border p-2 rounded-full" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductDetail;