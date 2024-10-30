import Heading from "./ui/heading";

const ShopPageCard = ({ name, description, price, src, onClick }) => {

    return (

        <div onClick={onClick} className="ShopPageCard flex flex-col text-center flex-wrap w-fit bg-gray-50">
            <div className="max-h-[300px] max-w-[300px] overflow-hidden">
                <img src={src} />
            </div>
            <div className="p-4 flex flex-col gap-3 max-w-[300px]">
                <Heading variant="h4">{name}</Heading>
                <p>{description}</p>
                <p>{price}</p>

            </div>
        </div>

    )
}

export default ShopPageCard;