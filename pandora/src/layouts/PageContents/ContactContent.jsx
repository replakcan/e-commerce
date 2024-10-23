import SupportCall from "@/components/SupportCall";
import SupportInfo from "../SupportInfo";
import ContactInfo from "../ContactInfo";

const ContactContent = () => {

    return (
        <section className=" content flex flex-col gap-20">
            <ContactInfo />
            <SupportInfo />
            <SupportCall />
        </section>
    )

}
export default ContactContent;