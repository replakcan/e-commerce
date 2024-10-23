import Heading from "./ui/heading";

const FooterInfoCard = () => {


    return (

        <>
            <div className="footer-info w-fit">
                <Heading variant="h6">Company Info</Heading>
                <ul>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </ul>
            </div>

        </>
    )
}

export default FooterInfoCard;