import HeaderNav from "@/components/HeaderNav";
import TeamMemberHead from "@/components/TeamMemberHead";
import AboutContent from "@/layouts/AboutContent";
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
            <AboutContent />
            <TeamMemberHead />
            <TeamMembers />
            <Clients />
            <AboutOffer />
            <Footer />
        </>
    )
}
export default About;