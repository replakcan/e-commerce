import FooterBottom from "@/components/FooterBottom";
import FooterMid from "@/components/FooterMid";
import FooterTop from "@/components/FooterTop";

const Footer = () => {


    return (
        <section className="layout flex flex-col gap-8 bg-red-50">
            <FooterTop />
            <FooterMid />
            <FooterBottom />
        </section>
    )
}

export default Footer;