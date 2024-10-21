import Heading from "./ui/heading";

const CategoryCard = () => {


    return (

        <div className="grid grid-cols-3 grid-rows-3 w-fit">
            <img className="col-start-1 col-end-4 row-start-1 row-end-4 " src="https://placehold.co/250x250">
            </img>
            <div className="col-start-2 row-start-2 col-end-3 row-end-3 flex flex-col justify-around items-center">
                <Heading variant="h6">CLOTHS</Heading>
                <p>5 Items</p>
            </div>
        </div>
    )
}

export default CategoryCard;