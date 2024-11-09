import { featureCards } from "@/data";
import FeatureCard from "./FeatureCard";

const FeatureContent = () => {

    return (
        <div className="feature-content flex items-start flex-col gap-4 justify-between md:flex-row md:p-6 bg-light_gray py-12">
            {featureCards.map((f_card, index) => {
                return <FeatureCard
                    key={index}
                    title={f_card.title}
                    description={f_card.description}
                />
            })}
        </div>
    )
}

export default FeatureContent;