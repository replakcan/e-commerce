import TrialCard from "@/components/TrialCard";
import TeamMembers from "../TeamMembers";
import TeamMemberHead from "@/components/TeamMemberHead";
import TeamGrid from "../TeamGrid";
import TeamGridHead from "@/components/TeamGridHead";

const TeamContent = () => {

    return (
        <>
            <section className="content flex flex-col gap-20">
                <TeamGridHead />
            </section>
            <div className="py-8">
                <TeamGrid />
            </div>
            <section>
                <TeamMemberHead />
                <TeamMembers />
                <TrialCard />
            </section>
        </>
    )

}
export default TeamContent;