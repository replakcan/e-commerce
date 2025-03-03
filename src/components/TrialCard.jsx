import { Button } from './ui/button'
import Heading from './ui/heading'

const TrialCard = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-12 text-center">
      <Heading variant="h2">
        Start your
        <br />
        14days free trial
      </Heading>
      <p className="md:w-1/2 text-center w-[80%]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quos, deleniti placeat totam doloribus in.
        Enim culpa ut cumque blanditiis aspernatur vitae corporis sed quis rem! Amet illum maxime temporibus?
      </p>
      <div>
        <Button>Try it free now</Button>
      </div>
      <div className="flex gap-8 pb-24">
        <img height="32" width="32" src="https://cdn.simpleicons.org/x/black" />
        <img height="32" width="32" src="https://cdn.simpleicons.org/facebook/1877F2" />
        <img height="32" width="32" src="https://cdn.simpleicons.org/instagram/E1306C" />
        <img height="32" width="32" src="https://cdn.simpleicons.org/linkedin/1877F2" />
      </div>
    </div>
  )
}
export default TrialCard
