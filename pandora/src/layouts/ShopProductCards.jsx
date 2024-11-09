import Pagination from "@/components/Pagination";
import ShopPageCard from "@/components/ShopPageCard";
import { fetchProductDetails } from "@/redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const ShopProductCards = () => {
    const products = useSelector((store) => store.product.productList);
    const fetchState = useSelector((store) => store.product.fetchState);
    const total = useSelector((store) => store.product.total);
    const dispatch = useDispatch();
    let history = useHistory();
    const { gender, categoryName } = useParams();

    const handleProductClick = (product) => {
        const productNameSlug = product.name.replace(/\s+/g, '-').toLowerCase();

        dispatch(fetchProductDetails(product.id))

        history.push(`/shop/${gender}/${categoryName}/${product.category_id}/${productNameSlug}/${product.id}`);
    };

    if (fetchState === 'FETCHING') {
        return <span className="loader"></span>;
    }

    if (fetchState === 'FAILED') {
        return <p>Failed to load products.</p>;
    }


    /* if (total === 0) return <h1 className="font-bold text-5xl">Aradığınız kriterde ürün bulunamadı :{"("} </h1> */

    return (
        <div>
            <div className="flex flex-wrap justify-center md:justify-between gap-4">

                {products?.map((product) => {
                    return <ShopPageCard
                        onClick={() => handleProductClick(product)}
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        src={product.images[0].url} />
                })}
            </div>
            <div className="flex justify-center items-center py-4">
                <Pagination />
            </div>
        </div>
    )
}

export default ShopProductCards;

//TODO btn in productDetail doesn't go back to productPage 