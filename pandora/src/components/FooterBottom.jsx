import Button from "./ui/button";
import Heading from "./ui/heading";

const FooterBottom = () => {

    return (

        <section className="footer-el footerBottom flex flex-col gap-8 lg:flex-row lg:gap-0 lg:justify-between bg-footerTopBG">
            <div>
                <Heading variant="h3">Consulting Agency For Your Business</Heading>
                <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div>
                <Button variant="primary">Contact Us</Button>
            </div>
        </section>
    )
}

export default FooterBottom;