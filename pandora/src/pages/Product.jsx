import HeaderNav from "@/components/HeaderNav";
import ProductDescription from "@/components/ProductDescription";
import ProductDetail from "@/components/ProductDetail";
import Clients from "@/layouts/Clients";
import Footer from "@/layouts/Footer";
import MoreProducts from "@/layouts/MoreProducts";


const Product = () => {

    return (

        <div className="flex flex-col gap-8 bg-blue-50">

            <HeaderNav />
            <ProductDetail />
            <ProductDescription />
            <MoreProducts />
            <Clients />
            <Footer/>
        
        </div>
    )
}

export default Product;