import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import Heading from "./ui/heading";


const ProductDetail = ({ src, name, sell_count, description, price, stock }) => {

    const fetchState = useSelector((store) => store.product.fetchState)

    if (fetchState === 'FETCHING') {
        return <span className="loader"></span>;
    }

    if (fetchState === 'FAILED') {
        return <p>Failed to load products.</p>;
    }

    return (
        <div className="flex flex-col gap-2 md:flex-row bg-light_gray md:px-[10%] pb-12">
            <div className="flex flex-col gap-3">
                <div className="max-w-[500px]">
                    <img src={src} alt="" />
                </div>
                <div className="flex gap-3">
                    <img src="https://placehold.co/100x75" alt="" />
                    <img src="https://placehold.co/100x75" alt="" />
                </div>
            </div>
            <div className="p-3">
                <div className="flex flex-col gap-1">
                    <Heading variant="h4">{name}</Heading>
                    <div className="flex items-center gap-2">
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <p>Sell count: {sell_count}</p>
                    </div>
                </div>
                <div className="pt-2">
                    <p className="font-bold">{price}</p>
                    <p>Availability : <span className="text-ikincil">{stock} in stock</span></p>
                </div>
                <p className="pt-3 border-b-4 pb-2 md:w-3/4">{description}</p>
                <div className="flex items-center pt-4 justify-between md:justify-start md:gap-4">
                    <Button>Select Options</Button>
                    <div className="flex gap-8">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductDetail;