import FeatureContent from "@/components/FeatureContent";
import Heading from "@/components/ui/heading";
import { fetchProductDetails } from "@/redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";



const ProductCard_2 = ({ mostPopi_2 }) => {

    const categories = useSelector((store) => store.product.categories);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleProductClick = (product) => {
        const productNameSlug = product.name.replace(/\s+/g, '-').toLowerCase();

        const category = categories.find((cat) => cat.id === product.category_id);
        const categoryName = category.code?.slice(2);

        dispatch(fetchProductDetails(product.id));
        history.push(`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${categoryName}/${product.category_id}/${productNameSlug}/${product.id}`);

    };
    return (
        <div
            onClick={() => handleProductClick(mostPopi_2)}
            className="productCard_2 text-center flex flex-col items-center gap-12 md:gap-0">
            <img className="prc1 h-full w-full" src="./images/productCard/col-md-8.png" />
            <div className="prc2 h-full flex flex-col justify-center gap-4 bg-light_gray px-8 py-2">
                <Heading variant="h3">MOST POPULAR</Heading>
                <p>{mostPopi_2?.description}</p>
                <img className="py-5" src={mostPopi_2?.images[0].url} />
                <Heading variant="h4">{mostPopi_2?.name}</Heading>
                <p>${mostPopi_2?.price}</p>
            </div>
            <div className="prc3">
                <FeatureContent />
            </div>
        </div>
    )
}

export default ProductCard_2;