import { Button } from "./ui/button";


const SupportCard = () => {

    return (
        <div className="flex flex-col items-center gap-2 md:w-1/3 bg-white py-24">
            <img height="32" width="100" src="https://cdn.simpleicons.org/amazonsimpleemailservice
" />
            <p className="font-bold text-black">alper@repla.com</p>
            <p className="font-bold text-black">repla@alper.com</p>
            <p className="font-bold text-black">Get Support</p>
            <Button variant="outlineBorder">Submit Request</Button>
        </div>
    )
}
export default SupportCard;