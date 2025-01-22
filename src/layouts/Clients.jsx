import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const Clients = () => {
  return (
    <div className="flex flex-col gap-20 md:flex-row md:justify-between bg-light_gray px-[10%] py-12">
      <div className="client-card flex flex-col text-center gap-2 items-center">
        <Heading variant="h3">Subscribe For Latest Newsletter</Heading>
        <p>
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <div className="flex flex-wrap justify-center gap-1 md:flex-row">
          <Button>Try Now</Button>
          <Button variant="outlineBorder">Learn More</Button>
        </div>
      </div>
      <div className="client-card flex flex-col text-center gap-2 items-center">
        <Heading variant="h3">Subscribe For Latest Newsletter</Heading>
        <p>
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:flex-row">
          <img
            height="32"
            width="48"
            src="https://cdn.simpleicons.org/amazonwebservices/gray"
          />
          <img
            height="32"
            width="48"
            src="https://cdn.simpleicons.org/docker/gray"
          />
          <img
            height="32"
            width="48"
            src="https://cdn.simpleicons.org/reddit/gray"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
