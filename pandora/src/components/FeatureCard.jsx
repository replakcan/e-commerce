import Heading from "./ui/heading";

const FeatureCard = ({title, description}) => {

    return (
        <div className="feature-card flex items-center gap-4 w-fit">
            <i className="fa-solid fa-credit-card rounded-full p-3 bg-[#E74040] text-white border-transparent" />
            <div className="flex flex-col gap-1 text-left">
                <Heading variant="h6">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard;