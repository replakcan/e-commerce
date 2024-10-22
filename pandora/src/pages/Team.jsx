import HeaderNav from "@/components/HeaderNav";
import TeamGridHead from "@/components/TeamGridHead";
import TeamMemberHead from "@/components/TeamMemberHead";
import TrialCard from "@/components/TrialCard";
import Footer from "@/layouts/Footer";
import TeamGrid from "@/layouts/TeamGrid";
import TeamMembers from "@/layouts/TeamMembers";

const Team = () => {

    return (
        <div>
            <HeaderNav />
            <TeamGridHead />
            <TeamGrid />
            <TeamMemberHead />
            <TeamMembers />
            <TrialCard />
            <Footer />
        </div>
    )
}
export default Team;