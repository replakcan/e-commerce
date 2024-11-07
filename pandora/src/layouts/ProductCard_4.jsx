import Heading from "@/components/ui/heading";
import { fetchProductDetails } from "@/redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductCard_4 = ({ mostPopi }) => {

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
            onClick={() => handleProductClick(mostPopi)}
            className="productCard_4 flex flex-col items-center gap-12 md:gap-0">
            <img className="popularImg" src="./images/productCard/col-md-9.png" />
            <div className="popular w-full h-full">
                <div className="h-full flex flex-col justify-center gap-4 bg-light_gray px-8 py-2 text-center">
                    <Heading variant="h3">MOST POPULAR</Heading>
                    <p>{mostPopi?.description}</p>
                    <img className="py-5" src={mostPopi?.images[0].url} />
                    <Heading variant="h4">{mostPopi?.name}</Heading>
                    <p>${mostPopi?.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard_4;