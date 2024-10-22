import TeamMemberCard from "@/components/TeamMemberCard";

const TeamMembers = () => {

    return (
        <section className="flex flex-col gap-8 md:flex-row flex-wrap md:justify-between">
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />        
        </section>
    )
}
export default TeamMembers;