import SupportCard from "@/components/SupportCard";
import Heading from "@/components/ui/heading";

const SupportInfo = () => {

    return (

        <div className="flex flex-col  gap-4 w-full py-12">
            <div className="text-center py-3">
                <Heading variant="h6">VISIT OUR OFFICE</Heading>
                <Heading variant="h2">We help small businesses with big ideas</Heading>
            </div>
            <div className="support-container flex flex-col gap-1 md:flex-row py-12">
                <SupportCard />
                <SupportCard />
                <SupportCard />
            </div>
        </div>
    )
}
export default SupportInfo;