import TeamMemberHead from "@/components/TeamMemberHead";
import AboutContext from "../AboutContext";
import AboutInfo from "../AboutInfo";
import TeamMembers from "../TeamMembers";
import Clients from "../Clients";
import AboutOffer from "../AboutOffer";

const AboutContent = () => {

    return (
        <section>
            <AboutInfo />
            <AboutContext />
            <TeamMemberHead />
            <TeamMembers />
            <Clients />
            <AboutOffer />
        </section>
    )

}
export default AboutContent;