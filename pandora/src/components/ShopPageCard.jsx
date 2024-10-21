import Heading from "./ui/heading";

const ShopPageCard = () => {

    return (

        <div className="ShopPageCard flex flex-col md:w-[25%] text-center flex-wrap">
            <img src="https://placehold.co/300x300" />
            <div className="p-4 flex flex-col gap-3">
                <Heading variant="h4">Graphic Design</Heading>
                <p>English Department</p>
                <p>$16.48<span className="text-ikincil">$6.48</span></p>

            </div>
        </div>

    )
}

export default ShopPageCard;