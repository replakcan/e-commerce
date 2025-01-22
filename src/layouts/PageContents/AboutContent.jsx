import TeamMemberHead from "@/components/TeamMemberHead";
import AboutContext from "../AboutContext";
import AboutInfo from "../AboutInfo";
import TeamMembers from "../TeamMembers";
import Clients from "../Clients";
import AboutOffer from "../AboutOffer";

const AboutContent = () => {
  return (
    <div className="content flex flex-col gap-20">
      <section className="flex flex-col gap-20">
        <AboutInfo />
        <AboutContext />
        <TeamMemberHead />
        <TeamMembers />
      </section>
      <div>
        <Clients />
        <AboutOffer />
      </div>
    </div>
  );
};
export default AboutContent;
