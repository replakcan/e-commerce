import Heading from "./ui/heading";

const ShopItemVer = () => {

    return (

        <div className="shopItemVertical flex flex-col md:w-[33%] text-center bg-gray-50">
            <img src="https://placehold.co/300x300" />
            <div className="p-4 flex flex-col gap-3">
                <Heading variant="h4">Graphic Design</Heading>
                <p>English Department</p>
                <p>$16.48<span className="text-ikincil">$6.48</span></p>

            </div>
        </div>

    )
}

export default ShopItemVer;