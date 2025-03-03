/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/heading'

const AboutOffer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#2A7CC7] md:px-[10%] lg:pr-0 text-white items-center">
      <div className="flex flex-col items-center text-center lg:text-left gap-4 lg:items-start py-24 w-[80%] md:w-full">
        <p className="text-white font-bold">WORK WITH US</p>
        <Heading className="text-white" variant="h2">
          Now Let's grow Yours
        </Heading>
        <p className="text-white md:w-[80%] lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius qui aperiam totam, non laudantium harum,
          voluptate temporibus blanditiis necessitatibus suscipit tempore libero illum corrupti exercitationem voluptas
          ut facilis, iure neque.
        </p>
        <Button variant="outlineBrWh">Button</Button>
      </div>
      <div className="hidden lg:block h-full">
        <img src="./images/about/workworkwork.png" alt="" />
      </div>
    </div>
  )
}
export default AboutOffer
