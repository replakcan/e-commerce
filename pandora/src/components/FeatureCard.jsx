import Button from "./ui/button";
import Heading from "./ui/heading";

const FeatureCard = () => {

    return (
        <div className="feature-card flex items-center gap-2 w-fit">
            <i className="fa-solid fa-credit-card rounded-full p-3 bg-birincil text-white border-transparent" />
            <div className="flex flex-col gap-1">
                <Heading variant="h6">Easy To Use</Heading>
                <p>Things on a very small <br />that you have any direct</p>
            </div>
        </div>
    )
}

export default FeatureCard;