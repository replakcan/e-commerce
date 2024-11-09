import Heading from "./ui/heading";

const FooterInfoCard = ({title, infosman}) => {

    return (

        <>
            <div className="footer-info w-fit">
                <Heading variant="h6">{title}</Heading>
                <ul>
                    {infosman.map((info, index) => {
                        return <p key={index}>{info}</p>
                    })}
                </ul>
            </div>

        </>
    )
}

export default FooterInfoCard;