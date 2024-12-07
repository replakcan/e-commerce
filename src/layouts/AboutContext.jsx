import Heading from "@/components/ui/heading";
/* import VideoComponent from "@/components/VideoComponent"; */

const AboutContext = () => {

    return (
        <div className="flex flex-col gap-24">
            <div className="flex flex-col items-center text-center md:flex-row gap-8 px-[10%] md:px-0">
                <div className="flex flex-col gap-3 md:text-left">
                    <p className="text-danger">Problems trying</p>
                    <Heading variant="h3" className="font-bold">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</Heading>
                </div>
                <p className="md:text-left">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="flex flex-col text-center gap-32 md:flex-row md:justify-around flex-wrap">
                <div>
                    <Heading variant="h1">15K</Heading>
                    <Heading variant="p" className="font-bold text-xl">Happy Customers</Heading>
                </div>
                <div>
                    <Heading variant="h1">150K</Heading>
                    <Heading variant="p" className="font-bold text-xl">Monthly Visitors</Heading>
                </div>
                <div>
                    <Heading variant="h1">15</Heading>
                    <Heading variant="p" className="font-bold text-xl">Countries Worldwide</Heading>
                </div>
                <div>
                    <Heading variant="h1">100+</Heading>
                    <Heading variant="p" className="font-bold text-xl">Top Partners</Heading>
                </div>
            </div>
            {/* <VideoComponent /> */}
            <div>

            </div>

        </div>
    )
}
export default AboutContext;