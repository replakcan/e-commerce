import FooterInfoCard from "./FooterInfoCard";

const FooterInfoContent = () => {


    return (

        <div className="footer-info-content flex flex-col lg:flex-row justify-start items-start gap-12">
            <FooterInfoCard />
            <FooterInfoCard />
            <FooterInfoCard />
            <FooterInfoCard />
            <FooterInfoCard />
        </div>
    )
}

export default FooterInfoContent;