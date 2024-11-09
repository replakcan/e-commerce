import Heading from "./ui/heading";

const ShopItemVer = ({ name, onClick, description, price, src }) => {
    return (
        <div
            onClick={onClick}
            className="shopItemVertical flex flex-col md:w-[32%] md:h-[48%] text-center bg-gray-50 w-[80%] border rounded overflow-hidden transition-transform transform hover:scale-95 hover:shadow-inner cursor-pointer"
        >
            <div className="overflow-hidden">
                <img src={src} className="w-full h-full object-cover" alt={`${name}`} />
            </div>
            <div className="p-4 flex flex-col gap-3">
                <Heading variant="h4">{name}</Heading>
                <p className="text-gray-700">{description}</p>
                <p className="text-gray-900 font-semibold">${price}</p>
            </div>
        </div>
    );
};

export default ShopItemVer;
