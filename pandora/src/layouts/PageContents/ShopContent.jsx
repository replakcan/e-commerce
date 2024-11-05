import SearchResults from "@/components/SearchResults";
import ShopProductCards from "../ShopProductCards";
import Categories from "../Categories";
import Clients from "../Clients";

const ShopContent = () => {

    return (
        <div className="content flex flex-col gap-20">
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