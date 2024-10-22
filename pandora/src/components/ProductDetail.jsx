import Button from "./ui/button";
import Heading from "./ui/heading";


const ProductDetail = () => {

    return (
        <div className="flex flex-col gap-2 md:flex-row bg-red-50 py-4">
            <div className="flex flex-col gap-3">
                <div>
                    <img src="https://placehold.co/500x450" alt="" />
                </div>
                <div className="flex gap-3">
                    <img src="https://placehold.co/100x75" alt="" />
                    <img src="https://placehold.co/100x75" alt="" />
                </div>
            </div>
            <div className="p-3">
                <div className="flex flex-col gap-1">
                    <Heading variant="h4">Floating Phone</Heading>
                    <div className="flex items-center gap-2">
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <p>10 Reviews</p>
                    </div>
                </div>
                <div className="pt-2">
                    <p className="font-bold">$1,139.33</p>
                    <p>Availability : <span className="text-ikincil">In Stock</span></p>
                </div>
                <p className="pt-3 border-b-4 pb-2 md:w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate aspernatur rerum quos minima, corrupti enim excepturi aliquid tenetur sunt quis adipisci officia nisi maiores consectetur quisquam fugit dolore fuga non?</p>
                <div className="flex items-center pt-4 justify-between md:justify-start md:gap-4">
                    <Button variant="primary">Select Options</Button>
                    <div className="flex gap-8">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductDetail;