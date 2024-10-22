import HeaderNav from "@/components/HeaderNav";
import SearchResults from "@/components/SearchResults";
import Categories from "@/layouts/Categories";
import Clients from "@/layouts/Clients";
import Footer from "@/layouts/Footer";
import ShopProductCards from "@/layouts/ShopProductCards";

const Shop = () => {


    return (

        <div className="page flex flex-col gap-6 bg-blue-50">

            <div>
                <HeaderNav />
            </div>
            <Categories />
            <SearchResults />
            <ShopProductCards />
            <Clients />
            <Footer />
        
        </div>

    )
}
export default Shop;