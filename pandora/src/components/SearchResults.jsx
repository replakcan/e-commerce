import { AlignJustify, LayoutGrid } from "lucide-react";
import { Button } from "./ui/button";
import SortButton from "./SortButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByUserChoices, setFilter } from "@/redux/actions/productActions";
import { useParams } from "react-router-dom";

//TODO views butonlarını aktifleştir
//TODO kategori değiştirince sayfa 1'e dönmüyor (offseti resetle)
const SearchResults = () => {

    const { categoryId, sort } = useParams();
    const dispatch = useDispatch();
    const total = useSelector((store) => store.product.total)
    const filtre = useSelector((store) => store.product.filter)
    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    const handleFilter = () => {
        dispatch(fetchProductsByUserChoices(categoryId, sort, filtre));
    };


    return (

        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:py-6">
            <p> Showing all {total} results</p>
            <div className="search-icon-btns flex flex-row items-center gap-3">
                <p>Views:</p>
                <Button variant="outline" size="iconsqr" ><LayoutGrid /></Button>
                <Button variant="outline" size="iconsqr" ><AlignJustify /></Button>
            </div>
            <div className="search-btns flex gap-3 flex-wrap justify-center">
                <SortButton />
                <div>
                    <input
                        className="px-4"
                        type="text"
                        placeholder="Filter products"
                        value={filtre}
                        onChange={handleFilterChange}
                    />
                    <Button onClick={handleFilter} >Filter</Button>
                </div>
            </div>
        </div>
    )
}
export default SearchResults;