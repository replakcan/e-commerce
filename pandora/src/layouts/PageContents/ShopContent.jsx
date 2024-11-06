import SearchResults from "@/components/SearchResults";
import ShopProductCards from "../ShopProductCards";
import Categories from "../Categories";
import Clients from "../Clients";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByUserChoices } from "@/redux/actions/productActions";

const ShopContent = () => {
    const dispatch = useDispatch();

    const {categoryId, sort, filter, limit, offset} = useParams();
    
    /* const sort = useSelector((store) => store.product.sort)
    const filter = useSelector((store) => store.product.filter)
    const limit = useSelector((store) => store.product.limit)
    const offset = useSelector((store) => store.product.offset) */


    useEffect(() => {
        if (categoryId) {
            dispatch(fetchProductsByUserChoices(categoryId, sort, filter, limit, offset))
        }
    }, [categoryId, sort, filter, limit, offset])

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