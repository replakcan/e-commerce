import Heading from "@/components/ui/heading";

const ContactInfo = () => {

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col text-center items-center gap-3">
                <Heading variant="h5">CONTACT US</Heading>
                <Heading variant="h2">Get in touch <br /> today!</Heading>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque voluptates rerum explicabo beatae ipsam omnis aspernatur sequi repudiandae inventore deserunt sint, tempora, earum labore doloremque eum quae non sed quibusdam.</p>
                <div>
                    <p className="font-bold">Phone : 123456</p>
                    <p className="font-bold">Fax : 123456</p>
                </div>
                <div className="socials flex gap-2">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
            <div>
                <img src="https://placehold.co/600x400" />
            </div>
        </div>
    )
}

export default ContactInfo;