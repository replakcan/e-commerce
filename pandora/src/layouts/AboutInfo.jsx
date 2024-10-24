import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const AboutInfo = () => {

    return (
        <div className="flex flex-col gap-3 md:flex-row md:justify-between py-12">
            <div className="flex flex-col items-center md:w-1/2 md:items-start md:justify-center gap-4">
                <p className="font-bold hidden md:block">ABOUT COMPANY</p>
                <Heading variant="h2">ABOUT US</Heading>
                <p className="md:w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <Button>Get Quote Now</Button>
            </div>
            <div className=""> 
                <img src="https://placehold.co/600x400" />
            </div>
        </div>
    )
}

export default AboutInfo;