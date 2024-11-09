import FooterBottom from "@/components/FooterBottom";
import FooterMid from "@/components/FooterMid";
import FooterTop from "@/components/FooterTop";

const Footer = () => {


    return (
        <div className="layout flex flex-col gap-8 bg-gray-50 text-black">
            {/* <FooterTop /> */}
            <FooterMid />
            <FooterBottom />
        </div>
    )
}

export default Footer;