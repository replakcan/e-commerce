import ShopPageCard from "@/components/ShopPageCard";
import { useSelector } from "react-redux";

const ShopProductCards = () => {

    const products = useSelector((store) => store.product.productList);
    console.log("PRODUCTS: ", products)
    return (

        <div className="flex flex-wrap justify-center md:justify-between gap-3">

            {products.products.map((product) => {
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