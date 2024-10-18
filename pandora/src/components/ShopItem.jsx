import Heading from "./ui/heading";

const ShopItem = () => {


    return (
        <div className="flex items-center p-6 border border-gray-300 rounded-lg max-w-lg bg-white w-fit">
            <div className="flex flex-col gap-4">
                <p className="text-gray-500 text-sm">Your Space</p>
                <Heading variant="h3">Unique Life</Heading>
                <p className="text-sm">Explore Items</p>
            </div>
            <div className="ml-4">
                <img src="https://placehold.co/600x800" alt="Ice Cream Image" className="w-32 h-auto" />
            </div>
        </div>

    )
}
export default ShopItem;