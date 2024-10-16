import FeatureCard from "./FeatureCard";

const FeatureContent = () => {

    return (
        <div className="feature-content flex p-2 flex-col gap-4 justify-between lg:flex-row">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
        </div>
    )
}

export default FeatureContent;