import Heading from "./ui/heading";

const TeamMemberHead = () => {

    return (
        <div className="text-center flex flex-col items-center gap-3 py-24">
            <div className="flex flex-col md:flex-row md:gap-3 py-4">
                <Heading variant="h1">Meet Our</Heading>
                <Heading variant="h1">Team</Heading>
            </div>
            <p className="w-1/2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
    )
}
export default TeamMemberHead;