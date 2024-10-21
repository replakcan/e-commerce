import HeaderNav from "@/components/HeaderNav";
import SearchResults from "@/components/SearchResults";
import Categories from "@/layouts/Categories";
import Clients from "@/layouts/Clients";
import Footer from "@/layouts/Footer";
import ShopProductCards from "@/layouts/ShopProductCards";

const Shop = () => {


    return (

        <>
            <section>
                <HeaderNav />
            </section>
            <Categories />
            <SearchResults />
            <ShopProductCards />
            <Clients />
            <Footer />
        </>

    )
}
export default Shop;