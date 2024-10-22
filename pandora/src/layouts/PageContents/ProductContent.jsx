import ProductDescription from "@/components/ProductDescription";
import Clients from "../Clients";
import MoreProducts from "../MoreProducts";
import ProductDetail from "@/components/ProductDetail";

const ProductContent = () => {

    return (
        <section>
            <ProductDetail />
            <ProductDescription />
            <MoreProducts />
            <Clients />
        </section>
    )

}
export default ProductContent;