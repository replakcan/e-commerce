import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/heading'

const AboutInfo = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:w-1/2 md:items-start md:justify-center gap-4 mb-24 px-[10%] md:px-0">
        <Heading variant="h5" className="font-bold hidden md:block">
          ABOUT COMPANY
        </Heading>
        <Heading variant="h1">ABOUT US</Heading>
        <p className="md:w-2/3">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <Button>Get Quote Now</Button>
      </div>
      <div className="flex justify-center">
        <img src="./images/about/technology 1.png" />
      </div>
    </div>
  )
}

export default AboutInfo
