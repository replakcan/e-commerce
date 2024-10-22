import Button from "./ui/button";

const SearchResults = () => {
    return (

        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
            <p> Showing all 12 results</p>
            <div className="search-icon-btns flex flex-row items-center gap-3">
                <p>Views:</p>
                {/* //TODO BUTONLARA DOGRU ICON KOY */}
                <Button variant="icon"><i className="fa-solid fa-arrow-left"></i></Button>
                <Button variant="icon"><i className="fa-solid fa-arrow-left"></i></Button>
            </div>
            <div className="search-btns flex gap-3">
                <Button variant="icon">Popularity</Button>
                <Button>Filter</Button>
            </div>
        </div>
    )
}
export default SearchResults;