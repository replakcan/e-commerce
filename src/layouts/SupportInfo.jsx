import SupportCard from "@/components/SupportCard";
import Heading from "@/components/ui/heading";

const SupportInfo = () => {
  return (
    <div className="flex flex-col gap-4 bg-light_gray w-full py-12">
      <div className="text-center py-3">
        <Heading variant="h6">VISIT OUR OFFICE</Heading>
        <div className="flex flex-col pt-3">
          <Heading variant="h2">We help small</Heading>
          <Heading variant="h2">businesses</Heading>
          <Heading variant="h2">with big ideas</Heading>
        </div>
      </div>
      <div className="support-container flex flex-col gap-5 md:flex-row py-12 px-[10%]">
        <SupportCard />
        <SupportCard />
        <SupportCard />
      </div>
    </div>
  );
};
export default SupportInfo;
