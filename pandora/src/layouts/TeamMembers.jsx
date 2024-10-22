import TeamMemberCard from "@/components/TeamMemberCard";

const TeamMembers = () => {

    return (
        <div className="flex flex-col gap-8 md:flex-row flex-wrap md:justify-between">
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />        
        </div>
    )
}
export default TeamMembers;