import SearchResults from "@/components/SearchResults";
import ShopProductCards from "../ShopProductCards";
import Categories from "../Categories";
import Clients from "../Clients";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductsByUserChoices } from "@/redux/actions/productActions";

const ShopContent = () => {
    const { categoryId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (categoryId) {
            dispatch(fetchProductsByUserChoices(categoryId))
        }
    }, [categoryId])

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