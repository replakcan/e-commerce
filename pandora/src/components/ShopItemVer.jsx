import Heading from "./ui/heading";

const ShopItemVer = () => {

    return (

        <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg max-w-xs bg-white w-fit md:w-1/3">
            <div className="mb-4">
                <img src="https://placehold.co/600x800" alt="Caramel Cone Ice Cream" className="w-32 h-auto " />
            </div>
            <Heading variant="h3">Graphic Design</Heading>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2 mt-2">
                <p className="text-gray-400 line-through text-sm">$16.48</p>
                <p className="text-green-600 text-lg font-semibold">$6.48</p>
            </div>
        </div>

    )
}

export default ShopItemVer;