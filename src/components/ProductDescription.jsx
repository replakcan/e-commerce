import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Heading from "./ui/heading";

const ProductDescription = () => {

    return (
        <div className="flex flex-col gap-12 py-12 w-[80%] md:w-full">
            <div className="flex justify-center gap-8 py-3 ">
                <Button variant="ghost">Description</Button>
                <Button variant="ghost">Additional information</Button>
                <Button variant="ghost">Reviews <span className="text-ikincil">{(0)}</span></Button>
            </div>
            <div className="md:flex flex-wrap md:justify-around row-gap-5">
                <div className="md:w-[53%]">
                    <img className="" src="https://placehold.co/600x400" />
                </div>
                <div className="flex flex-col gap-4 col-start-2 col-end-3 md:w-[45%]">
                    <Heading variant="h3">the quick fox jumps over</Heading>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic omnis aperiam cum consequuntur cumque, cupiditate quidem distinctio culpa expedita debitis iste assumenda necessitatibus ipsa! Voluptatibus expedita praesentium quidem aperiam, ratione ut, labore ipsam veniam nesciunt iusto fugit, molestiae provident?</p>
                </div>
                <div className=" flex flex-col md:flex-row justify-around gap-4 md:w-full">
                    <div className="flex flex-col gap-4">
                        <Heading variant="h3">the quick fox jumps over</Heading>
                        <ul>
                            <li className="flex items-center gap-2"> <ChevronRight /> the quick fox jumps over the lazy dog</li>
                            <li className="flex items-center gap-2"> <ChevronRight /> the quick fox jumps over the lazy dog</li>
                            <li className="flex items-center gap-2"> <ChevronRight /> the quick fox jumps over the lazy dog</li>
                            <li className="flex items-center gap-2"> <ChevronRight /> the quick fox jumps over the lazy dog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Heading variant="h3">the quick fox jumps over</Heading>
                        <ul>
                            <li className="flex items-center gap-2"> <ChevronRight /> the quick fox jumps over the lazy dog</li>
                            <li className="flex items-center gap-2"> <ChevronRight /> the quick fox jumps over the lazy dog</li>
                            <li className="flex items-center gap-2"> <ChevronRight /> the quick fox jumps over the lazy dog</li>
                            <li className="flex items-center gap-2"> <ChevronRight /> the quick fox jumps over the lazy dog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDescription;