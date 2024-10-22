import Button from "./ui/button";
import Heading from "./ui/heading";

const TrialCard = () => {

    return (
        <div className="flex flex-col items-center gap-2 py-12">

            <Heading variant="h2">Start your 14 days free trial</Heading>
            <p className="md:w-1/2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quos, deleniti placeat totam doloribus in. Enim culpa ut cumque blanditiis aspernatur vitae corporis sed quis rem! Amet illum maxime temporibus?</p>
            <div>
                <Button variant="primary">Try it free now</Button>
            </div>
            <div className="flex gap-2">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>

        </div>
        
    )
}
export default TrialCard;