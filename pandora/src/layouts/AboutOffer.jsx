import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const AboutOffer = () => {

    return (
        <div className="flex flex-col md:flex-row bg-[#2A7CC7] md:pl-[10%] text-white">
            <div className="flex flex-col items-center text-center gap-1 md:justify-center md:items-start md:p-20">
                <p>WORK WITH US</p>
                <Heading variant="h4">Now Let's grow Yours</Heading>
                <p className="md:w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius qui aperiam totam, non laudantium harum, voluptate temporibus blanditiis necessitatibus suscipit tempore libero illum corrupti exercitationem voluptas ut facilis, iure neque.</p>
                <Button variant="outline">Button</Button>
            </div>
            <div className="hidden md:block h-full">
                <img src="./images/about/workworkwork.png" alt="" />
            </div>
        </div>
    )
}
export default AboutOffer;