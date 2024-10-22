import HeaderNav from "@/components/HeaderNav";
import Footer from "@/layouts/Footer";
import ShopContent from "@/layouts/PageContents/ShopContent";


const Shop = () => {


    return (

        <div className="page flex flex-col gap-6 bg-blue-50">
            <HeaderNav/>
            <ShopContent/>
            <Footer />
        </div>

    )
}
export default Shop;