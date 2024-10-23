import { Button } from "./ui/button";
import Heading from "./ui/heading";

const ProductDescription = () => {

    return (

        <>

            <div className="flex flex-col gap-4 md:grid grid-cols-3 grid-rows[mincontent_1fr] py-12">
                <div className="flex justify-center gap-8 row-start-1 row-end-2 col-start-1 col-end-4 py-3 ">
                    <Button variant="ghost">Description</Button>
                    <Button variant="ghost">Additional information</Button>
                    <Button variant="ghost">Reviews <span className="text-ikincil">{(0)}</span></Button>
                </div>
                <img className="col-start-1 col-end-2" src="https://placehold.co/600x400" />
                <div className="col-start-2 col-end-3">
                    <Heading variant="h2">the quick fox jumps over</Heading>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic omnis aperiam cum consequuntur cumque, cupiditate quidem distinctio culpa expedita debitis iste assumenda necessitatibus ipsa! Voluptatibus expedita praesentium quidem aperiam, ratione ut, labore ipsam veniam nesciunt iusto fugit, molestiae provident? Dolor doloribus reiciendis perspiciatis, perferendis voluptatum sequi aperiam blanditiis accusamus tenetur eligendi minima vel tempora nihil reprehenderit impedit expedita quis minus? Perspiciatis modi officiis ullam! Aspernatur eveniet repellendus cumque qui animi error, minima quas omnis, hic perspiciatis fugit exercitationem. Tempore accusantium facilis ducimus quas officiis dicta saepe sint excepturi libero provident magnam vitae at facere reprehenderit, quia est autem nesciunt consequuntur.</p>
                </div>
                <div className="col-start-3 col-end-4 flex flex-col justify-between">
                    <div>
                        <Heading variant="h2">the quick fox jumps over</Heading>
                        <ul>
                            <li>the quick fox jumps over the lazy dog</li>
                            <li>the quick fox jumps over the lazy dog</li>
                            <li>the quick fox jumps over the lazy dog</li>
                            <li>the quick fox jumps over the lazy dog</li>
                        </ul>
                    </div>
                    <div>
                        <Heading variant="h2">the quick fox jumps over</Heading>
                        <ul>
                            <li>the quick fox jumps over the lazy dog</li>
                            <li>the quick fox jumps over the lazy dog</li>
                            <li>the quick fox jumps over the lazy dog</li>
                            <li>the quick fox jumps over the lazy dog</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDescription;