import Heading from "@/components/ui/heading";

const ProductCard_4 = () => {


    return (

        <section className="productCard_4 flex flex-col items-center">
            <img className="popularImg" src="./images/productCard/col-md-9.png" />
            <div className="popular w-full h-full">
                <div className="h-full flex flex-col justify-center gap-4 bg-footerTopBG px-8 py-2">
                    <Heading variant="h3">MOST POPULAR</Heading>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur a, fuga in commodi excepturi et consequatur quas sequi tempore odio nobis labore architecto obcaecati iusto praesentium placeat repudiandae illo neque?</p>
                    <img className="py-5" src="https://placehold.co/300x300" />
                    <Heading variant="h4">English Department</Heading>
                    <p>$16.48<span className="text-ikincil">$16.48</span></p>
                </div>
            </div>
        </section>
    )
}

export default ProductCard_4;