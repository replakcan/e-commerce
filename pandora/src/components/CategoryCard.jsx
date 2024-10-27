import { Link } from "react-router-dom";
import Heading from "./ui/heading";

const CategoryCard = ({ title, src, gender, category }) => {


    return (
        <Link to={`/shop/${gender}/${category}`}>
            <div className="grid grid-cols-3 grid-rows-3 max-h-[250px] max-w-[250px] overflow-hidden">
                <img className="col-start-1 col-end-4 row-start-1 row-end-4 object-cover" src={src}>
                </img>
                <div className="col-start-2 row-start-2 col-end-3 row-end-3 flex flex-col justify-around items-center">
                    <Heading variant="h6">{title}</Heading>
                    <p>5 Items</p>
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard;