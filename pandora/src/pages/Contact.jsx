import HeaderNav from "@/components/HeaderNav";
import SupportCall from "@/components/SupportCall";
import ContactInfo from "@/layouts/ContactInfo";
import Footer from "@/layouts/Footer";
import SupportInfo from "@/layouts/SupportInfo";

const Contact = () => {

    return (

        <div className="bg-blue-50 flex flex-col gap-4">
            <HeaderNav />
            <ContactInfo />
            <SupportInfo />
            <SupportCall />
            <Footer />
        </div>
    )
}

export default Contact;