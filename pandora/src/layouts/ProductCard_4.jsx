import FeatureContent from "@/components/FeatureContent";
import PopularItem from "@/components/MostPopularItem";


const ProductCard_4 = () => {


    return (

        <section className="productCard_4 flex flex-col items-center gap-4">
            <img className="popularImg" src="./src/assets/productCard/col-md-9.png" />
            <div className="popular">
                <PopularItem />
            </div>
        </section>
    )
}

export default ProductCard_4;