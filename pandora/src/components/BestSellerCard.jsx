import Heading from "./ui/heading";

const BestSellerCard = ({ name, src, description, price, onClick }) => {

    return (

        <div
            onClick={onClick}
            className="BestSellerCard flex flex-col md:w-[23%] items-center text-center bg-white border rounded">
            <div className="p-5 border aspect-video overflow-hidden object-center">
                <img src={src} />
            </div>
            <div className="p-4 flex flex-col gap-3">
                <Heading variant="h4">{name}</Heading>
                <p>{description}</p>
                <p>${price}</p>

            </div>
        </div>

    )
}

export default BestSellerCard;