import HeaderNav from "@/components/HeaderNav";

import Footer from "@/layouts/Footer";
import ContactContent from "@/layouts/PageContents/ContactContent";


const Contact = () => {

    return (
        <div className="bg-blue-50 flex flex-col gap-4">
            <HeaderNav />
            <ContactContent/>
            <Footer />
        </div>
    )
}

export default Contact;