import Button from "./ui/button";


const SupportCard = () => {

    return (
        <div className="flex flex-col items-center gap-1">
            <i class="fa-solid fa-location-dot"></i>
            <p>email@mail.com</p>
            <p>email@mail.com</p>
            <p className="font-bold">Get Support</p>
            <Button variant="outline">Submit Request</Button>
        </div>
    )
}
export default SupportCard;