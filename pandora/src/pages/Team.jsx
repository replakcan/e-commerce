import HeaderNav from "@/components/HeaderNav";
import TeamGridHead from "@/components/TeamGridHead";
import TeamMemberHead from "@/components/TeamMemberHead";
import TeamGrid from "@/layouts/TeamGrid";
import TeamMembers from "@/layouts/TeamMembers";

const Team = () => {

    return (
        <>
        <HeaderNav />
        <TeamGridHead />
        <TeamGrid />
        <TeamMemberHead />
        <TeamMembers />
        </>
    )
}
export default Team;