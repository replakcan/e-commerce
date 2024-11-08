import SearchResults from "@/components/SearchResults";
import ShopProductCards from "../ShopProductCards";
import Categories from "../Categories";
import Clients from "../Clients";
import { useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByUserChoices, setSort, setFilter, setLimit, setOffset, fetchProducts } from "@/redux/actions/productActions";

const ShopContent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const { gender, categoryId, categoryName } = useParams();

    // Redux store'dan parametreleri alıyoruz
    const sort = useSelector((store) => store.product.sort);
    const filter = useSelector((store) => store.product.filter);
    const limit = useSelector((store) => store.product.limit);
    const offset = useSelector((store) => store.product.offset);

    // Sayfa yüklendiğinde URL'den Redux store'a parametreleri yükle
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const initialSort = queryParams.get("sort") || "";
        const initialFilter = queryParams.get("filter") || "";
        const initialLimit = queryParams.get("limit") || "24";
        const initialOffset = queryParams.get("offset") || "";

        // Redux store'da değerleri güncelle
        dispatch(setSort(initialSort));
        dispatch(setFilter(initialFilter));
        dispatch(setLimit(initialLimit));
        dispatch(setOffset(initialOffset));
    }, [location.search, dispatch]);

    useEffect(() => {
        // Boş olmayan parametreleri dinamik olarak queryParams nesnesine ekle


        const queryParamsObject = {};
        if (sort) queryParamsObject.sort = sort;
        if (filter) queryParamsObject.filter = filter;
        if (limit) queryParamsObject.limit = limit;
        if (offset) queryParamsObject.offset = offset;

        const queryParams = new URLSearchParams(queryParamsObject);

        if (!(gender && categoryId && categoryName)) {
            history.push("/shop")
            dispatch(fetchProducts())
        }

        // Ürünleri filtreler
        if (categoryId) {
            dispatch(fetchProductsByUserChoices(categoryId, sort, filter, limit, offset));

            history.push(`/shop/${gender}/${categoryName}/${categoryId}?${queryParams.toString()}`);
        }
    }, [gender, categoryId, categoryName, sort, filter, limit, offset, dispatch, history]);

    return (
        <div className="content flex flex-col gap-20">
            <Categories />
            <section className="flex flex-col gap-20">
                <SearchResults />
                <ShopProductCards />
            </section>
            <Clients />
        </div>
    );
};

export default ShopContent;
