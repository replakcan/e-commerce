import Button from "./ui/button";
import Heading from "./ui/heading";

const SupportCall = () => {

    return (

        <div className="flex flex-col items-center py-12">
            <i className="fa-solid fa-arrow-down"></i>
            <div className="text-center flex flex-col gap-3">
                <Heading variant="h5">WE Can't WAIT TI MEET YOU</Heading>
                <Heading variant="h1">Let's Talk</Heading>
                <Button variant="primary">Try it free now</Button>
            </div>

        </div>
    )
}
export default SupportCall;