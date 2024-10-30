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
        <div className="content py-12">
            <Button
                onClick={handleBackClick}
            >Back</Button>
            <ProductDetail
                src={productInfo.images[0].url}
                name={productInfo.name}
                description={productInfo.description}
                stock={productInfo.stock}
                price={productInfo.price}
                sell_count={productInfo.sell_count}
            />
            <section>
                <ProductDescription />
            </section>
            <div>
                <MoreProducts />
            </div>
            <Clients />
        </div>
    )

}
export default ProductContent;