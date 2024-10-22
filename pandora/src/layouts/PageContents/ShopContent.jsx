import SearchResults from "@/components/SearchResults";
import Clients from "../Clients";
import ShopProductCards from "../ShopProductCards";
import Categories from "../Categories";

const ShopContent = () => {

    return (
        <div className="flex flex-col gap-20">
            <Categories />
            <section className="flex flex-col gap-20">
                <SearchResults />
                <ShopProductCards />
            </section>
            <Clients />
        </div>
    )

}
export default ShopContent;