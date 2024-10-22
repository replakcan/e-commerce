import HeaderNav from "@/components/HeaderNav";
import TeamMemberHead from "@/components/TeamMemberHead";
import AboutContext from "@/layouts/AboutContext";
import AboutInfo from "@/layouts/AboutInfo";
import AboutOffer from "@/layouts/AboutOffer";
import Clients from "@/layouts/Clients";
import Footer from "@/layouts/Footer";
import TeamMembers from "@/layouts/TeamMembers";

const About = () => {

    return (
        <>
            <HeaderNav />
            <AboutInfo />
            <AboutContext />
            <TeamMemberHead />
            <TeamMembers />
            <Clients />
            <AboutOffer />
            <Footer />
        </>
    )
}
export default About;