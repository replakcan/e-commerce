import { ChevronRight } from 'lucide-react'
import Heading from './ui/heading'

const TeamGridHead = () => {
  return (
    <div className="flex flex-col gap-3 items-center py-12 md:pb-0 text-center">
      <p>WHAT WE DO</p>
      <Heading variant="h2">Innovation tailored for you</Heading>
      <p className="flex items-center font-bold">
        <span className="font-bold text-black">Home</span>
        <ChevronRight />
        Team
      </p>
    </div>
  )
}
export default TeamGridHead
