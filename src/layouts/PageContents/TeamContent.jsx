import TeamMemberHead from "@/components/TeamMemberHead";
import TeamGridHead from "@/components/TeamGridHead";
import TrialCard from "@/components/TrialCard";
import TeamMembers from "../TeamMembers";
import TeamGrid from "../TeamGrid";

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
  );
};
export default TeamContent;
