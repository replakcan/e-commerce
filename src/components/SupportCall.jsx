import { CornerRightDown } from "lucide-react";
import { Button } from "./ui/button";
import Heading from "./ui/heading";

const SupportCall = () => {

    return (

        <div className="flex flex-col items-center pb-24">
            <CornerRightDown size={124} className="text-primary" />
            <div className="text-center flex flex-col gap-8 items-center">
                <Heading variant="h5">WE Can't WAIT TO MEET YOU</Heading>
                <Heading variant="h1">Let's Talk</Heading>
                <Button>Try it free now</Button>
            </div>
        </div>
    )
}
export default SupportCall;