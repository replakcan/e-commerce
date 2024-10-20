import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const Clients = () => {

    return (
        <section className="flex flex-col gap-20 md:flex-row md:justify-between">
            <div className="client-card flex flex-col text-center gap-2 items-center">
                <Heading variant="h3">Subscribe For Latest Newsletter</Heading>
                <p>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th</p>
                <div className="flex flex-wrap justify-center gap-1 md:flex-row">
                    <Button variant="primary">Try Now</Button>

                    <Button variant="outline">Learn More</Button>
                </div>
            </div>
            <div className="client-card flex flex-col text-center gap-2 items-center">
                <Heading variant="h3">Subscribe For Latest Newsletter</Heading>
                <p>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th</p>
                <div className="flex flex-wrap justify-center gap-4 md:flex-row">
                    <img className="w-24 md:w-16" src="./images/clients/reddit.svg" alt="" />
                    <img className="w-24 md:w-16" src="./images/clients/stribe.svg" alt="" />
                    <img className="w-24 md:w-16" src="./images/clients/lfyt.svg" alt="" />
                </div>

            </div>
        </section>

    )
}

export default Clients;