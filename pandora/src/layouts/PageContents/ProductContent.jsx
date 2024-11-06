import ProductDescription from "@/components/ProductDescription";
import Clients from "../Clients";
import MoreProducts from "../MoreProducts";
import ProductDetail from "@/components/ProductDetail";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { useHistory } from "react-router-dom";

const ProductContent = () => {

    const productInfo = useSelector((store) => store.product.product)
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="content py-12 flex flex-col gap-4">
                <div className="text-center pb-12">
                    <Button
                        onClick={handleBackClick}
                    >Back to Products</Button>
                </div>
                {productInfo && <ProductDetail
                    src={productInfo.images[0].url}
                    name={productInfo.name}
                    description={productInfo.description}
                    stock={productInfo.stock}
                    price={productInfo.price}
                    sell_count={productInfo.sell_count}
                />}
                <section className="flex flex-col items-center">
                    <ProductDescription />
                </section>
                <div>
                    <MoreProducts />
                </div>
            </div>
            <Clients />
        </>
    )

}
export default ProductContent;