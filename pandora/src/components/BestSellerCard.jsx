import Heading from "./ui/heading";

const BestSellerCard = ({ name, src, description, price, onClick }) => {

    return (

        <div 
            onClick={onClick}
            className="BestSellerCard flex flex-col md:w-1/4 items-center text-center bg-white">
            <img src={src} />
            <div className="p-4 flex flex-col gap-3">
                <Heading variant="h4">{name}</Heading>
                <p>{description}</p>
                <p>{price}</p>

            </div>
        </div>

    )
}

export default BestSellerCard;