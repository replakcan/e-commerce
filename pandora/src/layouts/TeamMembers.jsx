import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/data";
const TeamMembers = () => {

    return (
        <div className="flex flex-col gap-8 md:flex-row flex-wrap md:justify-between items-center">
            {teamMembers.map((member, index) => {
                return <TeamMemberCard
                    key={index}
                    src={member.image}
                    name={member.name}
                    role={member.role} />
            })}
        </div>
    )
}
export default TeamMembers;