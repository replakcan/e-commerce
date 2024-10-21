import Button from "./ui/button";
import Heading from "./ui/heading";

const SupportCall = () => {

    return (

        <section className="flex flex-col items-center">
            <i class="fa-solid fa-arrow-down"></i>
            <div className="text-center flex flex-col gap-3">
                <Heading variant="h5">WE Can't WAIT TI MEET YOU</Heading>
                <Heading variant="h1">Let's Talk</Heading>
                <Button variant="primary">Try it free now</Button>
            </div>

        </section>
    )
}
export default SupportCall;