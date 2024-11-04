import Pagination from "@/components/Pagination";
import ShopPageCard from "@/components/ShopPageCard";
import { fetchProductDetails, fetchProductsByUserChoices } from "@/redux/actions/productActions";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const ShopProductCards = () => {

    const products = useSelector((store) => store.product.productList);
    const fetchState = useSelector((store) => store.product.fetchState);
    const total = useSelector((store) => store.product.total);
    /* const filter_input = useSelector((store) => store.product.filter) */
    const dispatch = useDispatch();
    let history = useHistory();
    const { categoryId, sort, filter, gender, categoryName } = useParams();

    useEffect(() => {
        if (categoryId) {
            dispatch(fetchProductsByUserChoices(categoryId, sort, filter));
        }
    }, [dispatch, categoryId, sort, filter]);

    const handleProductClick = (product) => {
        const productNameSlug = product.name.replace(/\s+/g, '-').toLowerCase();

        dispatch(fetchProductDetails(product.id))

        history.push(`/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product.id}`);
    };

    console.log("TOTAL:", total)
    if (fetchState === 'FETCHING') {
        return <span className="loader"></span>;
    }

    if (fetchState === 'FAILED') {
        return <p>Failed to load products.</p>;
    }


    if (total === 0) return <h1 className="font-bold text-5xl">Aradığınız kriterde ürün bulunamadı :{"("} </h1>

    return (
        <div>
            <div className="flex flex-wrap justify-center md:justify-between gap-3">

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