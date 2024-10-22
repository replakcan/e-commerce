import Heading from "@/components/ui/heading";

const ContactInfo = () => {

    return (
        <section className="flex flex-col gap-3 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-3 md:w-1/2 md:items-start md:justify-between">
                <Heading variant="h5">CONTACT US</Heading>
                <Heading variant="h2">Get in touch <br /> today!</Heading>
                <p className="md:w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque voluptates rerum explicabo beatae ipsam omnis aspernatur sequi repudiandae inventore deserunt sint, tempora, earum labore doloremque eum quae non sed quibusdam.</p>
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
            <div className=""> 
                <img src="https://placehold.co/600x400" />
            </div>
        </section>
    )
}

export default ContactInfo;