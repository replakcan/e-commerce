import Heading from "./ui/heading";

const BestSellerCard = () => {

    return (

        <div className="BestSellerCard flex flex-col md:w-1/4 items-center text-center bg-white">
            <img src="https://placehold.co/300x300" />
            <div className="p-4 flex flex-col gap-3">
                <Heading variant="h4">Graphic Design</Heading>
                <p>English Department</p>
                <p>$16.48<span className="text-ikincil">$6.48</span></p>

            </div>
        </div>

    )
}

export default BestSellerCard;