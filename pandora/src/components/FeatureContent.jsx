import FeatureCard from "./FeatureCard";

const FeatureContent = () => {

    return (
        <div className="feature-content flex items-start flex-col gap-4 justify-between md:flex-row p-6 bg-light_gray">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
        </div>
    )
}

export default FeatureContent;