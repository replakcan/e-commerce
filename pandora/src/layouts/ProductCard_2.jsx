import FeatureContent from "@/components/FeatureContent";
import Heading from "@/components/ui/heading";



const ProductCard_2 = () => {


    return (

        <div className="productCard_2 text-center flex flex-col items-center">
            <img className="prc1 h-full w-full" src="./images/productCard/col-md-8.png" />
            <div className="prc2 h-full flex flex-col justify-center gap-4 bg-light_gray px-8 py-2">
                <Heading variant="h3">MOST POPULAR</Heading>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur a, fuga in commodi excepturi et consequatur quas sequi tempore odio nobis labore architecto obcaecati iusto praesentium placeat repudiandae illo neque?</p>
                <img className="py-5" src="https://placehold.co/300x300" />
                <Heading variant="h4">English Department</Heading>
                <p>$16.48<span className="text-ikincil">$16.48</span></p>
            </div>
            <div className="prc3">
                <FeatureContent />
            </div>
        </div>
    )
}

export default ProductCard_2;