import FeatureContent from "@/components/FeatureContent";
import Heading from "@/components/ui/heading";



const ProductCard_2 = () => {


    return (

        <section className="productCard_2 text-center flex flex-col items-center">
            <img className="prc1" src="./src/assets/productCard/col-md-8.png" />
            <div className="prc2 h-full flex flex-col justify-center gap-4 bg-footerTopBG px-8">
                <Heading variant="h3">MOST POPULAR</Heading>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur a, fuga in commodi excepturi et consequatur quas sequi tempore odio nobis labore architecto obcaecati iusto praesentium placeat repudiandae illo neque?</p>
                <img className="py-5" src="https://placehold.co/600x400" />
                <Heading variant="h4">English Department</Heading>
                <p>$16.48<span className="text-ikincil">$16.48</span></p>
            </div>
            <div className="prc3">
                <FeatureContent />
            </div>
        </section>
    )
}

export default ProductCard_2;