import ProductDescription from "@/components/ProductDescription";
import Clients from "../Clients";
import MoreProducts from "../MoreProducts";
import ProductDetail from "@/components/ProductDetail";

const ProductContent = () => {

    return (
        <div className="content py-12">
            <ProductDetail />
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