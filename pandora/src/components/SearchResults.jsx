import { AlignJustify, LayoutGrid } from "lucide-react";
import { Button } from "./ui/button";
import SortButton from "./SortButton";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/redux/actions/productActions";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";

const SearchResults = () => {
    const dispatch = useDispatch();
    const total = useSelector((store) => store.product.total);
    const filtre = useSelector((store) => store.product.filter);

    // Local state to temporarily store input value
    const [inputValue, setInputValue] = useState(filtre);

    useEffect(() => {
        setInputValue(filtre); // Initialize input value with filter value from Redux
    }, [filtre]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update only local state
    };

    const handleFilter = () => {
        dispatch(setFilter(inputValue)); // Update Redux state on button click
    };

    return (
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:py-6">
            <p> Showing all {total} results</p>
            <div className="search-icon-btns flex flex-row items-center gap-3">
                <p>Views:</p>
                <Button variant="outline" size="iconsqr"><LayoutGrid /></Button>
                <Button variant="outline" size="iconsqr"><AlignJustify /></Button>
            </div>
            <div className="search-btns flex gap-3 flex-wrap justify-center">
                <SortButton />
                <div className="flex items-center">
                    <Input
                        type="email"
                        placeholder="Filter products"
                        value={inputValue}
                        onChange={handleInputChange} />
                    <Button onClick={handleFilter} type="submit">Filter</Button>
                </div>

            </div>
        </div>
    );
};
export default SearchResults;
