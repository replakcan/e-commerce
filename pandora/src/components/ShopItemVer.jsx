import Heading from "./ui/heading";

const ShopItemVer = () => {

    return (

        <div className="flex flex-col items-center border p-1">
            <img src="https://placehold.co/180x160" />
            <div className="flex flex-col gap-2 p-2 items-center">
                <Heading variant="h6">Graphic Design</Heading>
                <p>English Department</p>
                <p className="font-bold">$16.48 <span className="text-ikincil">$6.48</span></p>
            </div>

        </div>


    )
}

export default ShopItemVer;