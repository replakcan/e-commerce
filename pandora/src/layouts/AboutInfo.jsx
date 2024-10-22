import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const AboutInfo = () => {

    return (
        <section className="flex flex-col gap-3 md:flex-row md:justify-between ">
            <div className="flex flex-col items-center md:w-1/2 md:items-start md:justify-center gap-4">
                <p className="font-bold sm:hidden">ABOUT COMPANY</p>
                <Heading variant="h2">ABOUT US</Heading>
                <p className="md:w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque voluptates rerum explicabo beatae ipsam omnis aspernatur sequi repudiandae inventore deserunt sint, tempora, earum labore doloremque eum quae non sed quibusdam.</p>
                <Button variant="primary">Get Quote Now</Button>
            </div>
            <div className=""> 
                <img src="https://placehold.co/600x400" />
            </div>
        </section>
    )
}

export default AboutInfo;