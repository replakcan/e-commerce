import Heading from "@/components/ui/heading";
import VideoComponent from "@/components/VideoComponent";

const AboutContent = () => {

    return (
        <div>

            <div className="flex flex-col items-center text-center">
                <p className="text-danger">Problems trying</p>
                <p className="font-bold">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="flex flex-col text-center gap-10">
                <div>
                    <Heading variant="h1">15K</Heading>
                    <Heading variant="h5">Happy Customer</Heading>
                </div>
                <div>
                    <Heading variant="h1">150K</Heading>
                    <Heading variant="h5">Happy Customer</Heading>
                </div>
                <div>
                    <Heading variant="h1">15</Heading>
                    <Heading variant="h5">Happy Customer</Heading>
                </div>
                <div>
                    <Heading variant="h1">100+</Heading>
                    <Heading variant="h5">Happy Customer</Heading>
                </div>
            </div>
                <VideoComponent />
            <div>

            </div>

        </div>
    )
}
export default AboutContent;