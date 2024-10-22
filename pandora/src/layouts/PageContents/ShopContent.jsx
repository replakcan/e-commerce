import SearchResults from "@/components/SearchResults";
import Clients from "../Clients";
import ShopProductCards from "../ShopProductCards";
import Categories from "../Categories";

const ShopContent = () => {

    return (
        <section>
            <Categories />
            <SearchResults />
            <ShopProductCards />
            <Clients />
        </section>
    )

}
export default ShopContent;