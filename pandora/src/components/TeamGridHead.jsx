import Heading from "./ui/heading";

const TeamGridHead = () => {

    return (
        <div className="flex flex-col gap-3 items-center py-12">
            <p>WHAT WE DO</p>
            <Heading variant="h2">Innovation tailored for you</Heading>
            <p><span className="font-bold">Home</span>Team</p>
        </div>
    )
}
export default TeamGridHead;