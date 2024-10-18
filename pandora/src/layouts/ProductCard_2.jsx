import FeatureContent from "@/components/FeatureContent";
import PopularItem from "@/components/MostPopularItem";


const ProductCard_2 = () => {


    return (

        <section className="productCard_2 flex flex-col items-center gap-4">
            <img className="prc1" src="./src/assets/productCard/col-md-8.png" />
            <div className="prc2">
                <PopularItem />
            </div>
            <div className="prc3">
                <FeatureContent />
            </div>
        </section>
    )
}

export default ProductCard_2;