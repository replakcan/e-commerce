import ShopPageCard from "@/components/ShopPageCard";
import { fetchProductsByCategory, fetchProductsBySortParam } from "@/redux/actions/productActions";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ShopProductCards = () => {

    const products = useSelector((store) => store.product.productList);
    const fetchState = useSelector((store) => store.product.fetchState);
    const total = useSelector((store) => store.product.total);

    const dispatch = useDispatch();
    const { categoryId, sort } = useParams();

    useEffect(() => {
        if (categoryId) {
            dispatch(fetchProductsByCategory(categoryId));
        }
        if (sort) {
            dispatch(fetchProductsBySortParam(sort))
        }
    }, [categoryId, sort]);

    console.log("TOTAL:", total)
    if (fetchState === 'FETCHING') {
        return <span className="loader"></span>;
    }

    if (fetchState === 'FAILED') {
        return <p>Failed to load products.</p>;
    }


    return (
        <div className="flex flex-wrap justify-center md:justify-between gap-3">

            {products?.map((product) => {
                return <ShopPageCard
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    src={product.images[0].url} />
            })}

        </div>
    )
}

export default ShopProductCards;