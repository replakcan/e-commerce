import TrialCard from "@/components/TrialCard";
import TeamMembers from "../TeamMembers";
import TeamMemberHead from "@/components/TeamMemberHead";
import TeamGrid from "../TeamGrid";
import TeamGridHead from "@/components/TeamGridHead";

const TeamContent = () => {

    return (
        <section>
            <TeamGridHead />
            <TeamGrid />
            <TeamMemberHead />
            <TeamMembers />
            <TrialCard />
        </section>
    )

}
export default TeamContent;