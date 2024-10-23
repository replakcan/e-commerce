import { Button } from "./ui/button";
import Heading from "./ui/heading";

const FooterBottom = () => {

    return (

        <div className="footer-el footerBottom flex flex-col gap-8 md:flex-row md:gap-0 md:justify-between bg-light_gray items-center px-[10%] py-6">
            <div>
                <Heading variant="h3">Consulting Agency For Your Business</Heading>
                <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div>
                <Button>Contact Us</Button>
            </div>
        </div>
    )
}

export default FooterBottom;