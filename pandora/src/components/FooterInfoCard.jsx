import Heading from "./ui/heading";

const FooterInfoCard = () => {


    return (

        <>
            <div className="footer-info w-fit">
                <Heading variant="h6">Company Info</Heading>
                <ul>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>

        </>
    )
}

export default FooterInfoCard;