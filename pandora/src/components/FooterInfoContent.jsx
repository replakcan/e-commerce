import { footerMidContact, footerMidContent } from "@/data";
import FooterInfoCard from "./FooterInfoCard";
import Heading from "./ui/heading";

const FooterInfoContent = () => {

    return (

        <div className="footer-info-content flex flex-col md:flex-row justify-start items-start gap-12">
            {footerMidContent.map((content, index) => {
                return <FooterInfoCard
                    key={index}
                    title={content.title}
                    infosman={content.info} />
            })}
            <div>
                <Heading variant="h6">{footerMidContact.title}</Heading>
                <ul>
                    {footerMidContact.content.map((info, index) => {
                        return <div key={index} className="flex items-center gap-2">
                            <i className={info.fa_class} />
                            <p>{info.text}</p>
                        </div>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FooterInfoContent;