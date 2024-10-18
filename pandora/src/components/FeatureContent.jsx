import FeatureCard from "./FeatureCard";

const FeatureContent = () => {

    return (
        <div className="feature-content flex items-start flex-col gap-4 justify-around md:flex-row">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
        </div>
    )
}

export default FeatureContent;