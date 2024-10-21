import SupportCard from "@/components/SupportCard";
import Heading from "@/components/ui/heading";

const SupportInfo = () => {

    return (

        <section className="flex flex-col  gap-4 w-full">
            <div className="text-center">
                <Heading variant="h6">VISIT OUR OFFICE</Heading>
                <Heading variant="h2">We help small businesses with big ideas</Heading>
            </div>
            <div className="flex flex-col gap-1 bg-red-50 md:flex-row">
                <SupportCard />
                <SupportCard />
                <SupportCard />
            </div>
        </section>
    )
}
export default SupportInfo;