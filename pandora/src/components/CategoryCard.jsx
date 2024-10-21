import Heading from "./ui/heading";

const CategoryCard = () => {


    return (

        <div className="grid grid-cols-5 grid-rows-5 w-fit">
            <img className="col-start-1 col-end-6 row-start-1 row-end-6 " src="https://placehold.co/400x400">
            </img>
            <div className="col-start-3 row-start-3 col-end-4 row-end-4 flex flex-col justify-around items-center">
                <Heading variant="h6">CLOTHS</Heading>
                <p>5 Items</p>
            </div>
        </div>
    )
}

export default CategoryCard;