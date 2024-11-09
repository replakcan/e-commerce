import Heading from "./ui/heading";

const ShopItemVer = ({ name, onClick, description, price, src }) => {

    return (

        <div
            onClick={onClick}
            className="shopItemVertical flex flex-col md:w-[32%] md:h-[48%] text-center bg-gray-50 w-[80%] border rounded">
            <div className="overflow-hidden">
                <img src={src} />
            </div>
            <div
                className="p-4 flex flex-col gap-3">
                <Heading variant="h4">{name}</Heading>
                <p className="">{description}</p>
                <p>${price}</p>
            </div>
        </div>

    )
}

export default ShopItemVer;