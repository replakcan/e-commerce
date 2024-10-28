import { AlignJustify, LayoutGrid } from "lucide-react";
import { Button } from "./ui/button";
import SortButton from "./SortButton";

const SearchResults = () => {
    return (

        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:py-6">
            <p> Showing all 12 results</p>
            <div className="search-icon-btns flex flex-row items-center gap-3">
                <p>Views:</p>
                <Button variant="outline" size="iconsqr" ><LayoutGrid /></Button>
                <Button variant="outline" size="iconsqr" ><AlignJustify /></Button>
            </div>
            <div className="search-btns flex gap-3">
                <SortButton/>
                <Button>Filter</Button>
            </div>
        </div>
    )
}
export default SearchResults;