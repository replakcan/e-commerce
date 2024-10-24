import Heading from "@/components/ui/heading";
/* import VideoComponent from "@/components/VideoComponent"; */

const AboutContext = () => {

    return (
        <div className="flex flex-col gap-24">
            <div className="flex flex-col items-center text-center md:flex-row gap-8 ">
                <div className="flex flex-col gap-3 md:text-left">
                    <p className="text-danger">Problems trying</p>
                    <Heading variant="h6" className="font-bold">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</Heading>
                </div>
                <p className="text-left">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="flex flex-col text-center gap-10 md:flex-row md:justify-between">
                <div>
                    <Heading variant="h1">15K</Heading>
                    <Heading variant="h6">Happy Customer</Heading>
                </div>
                <div>
                    <Heading variant="h1">150K</Heading>
                    <Heading variant="h6">Happy Customer</Heading>
                </div>
                <div>
                    <Heading variant="h1">15</Heading>
                    <Heading variant="h6">Happy Customer</Heading>
                </div>
                <div>
                    <Heading variant="h1">100+</Heading>
                    <Heading variant="h6">Happy Customer</Heading>
                </div>
            </div>
            {/* <VideoComponent /> */}
            <div>

            </div>

        </div>
    )
}
export default AboutContext;