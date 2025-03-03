import Heading from '@/components/ui/heading'

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
      <div className="flex flex-col items-center gap-5 md:w-1/2 md:items-start md:justify-center text-center ">
        <Heading variant="h5">CONTACT US</Heading>
        <Heading className="md:text-left" variant="h1">
          Get in touch <br /> today!
        </Heading>
        <p className="md:w-2/3 w-[60%] md:text-left">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <div className="md:text-left">
          <p className="font-bold text-black">Phone : +90531</p>
          <p className="font-bold text-black">Fax : +90531</p>
        </div>
        <div className="socials flex gap-4">
          <img height="32" width="32" src="https://cdn.simpleicons.org/x" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/facebook/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/instagram/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/linkedin/black" />
        </div>
      </div>
      <div className="flex justify-center">
        <img src="./images/about/contact/contact_.png" />
      </div>
    </div>
  )
}

export default ContactInfo
