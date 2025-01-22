/* eslint-disable react/prop-types */
import Heading from "./ui/heading";

const TeamMemberCard = ({ src, name, role }) => {
  return (
    <div className="flex flex-col items-center md:w-[24%] w-[80%] gap-4 bg-light_gray w-fit">
      <div className="flex justify-center max-h-[400px] max-w-[350px] overflow-hidden">
        <img className="w-full h-full object-cover" src={src} />
      </div>
      <div className="flex flex-col gap-2 pt-2 items-center gap-3">
        <div className="flex flex-col items-center gap-2">
          <Heading variant="h3">{name}</Heading>
          <p className="font-bold text-lg">{role}</p>
        </div>
        <div className="flex gap-4 justify-center pb-8">
          <img
            height="32"
            width="32"
            src="https://cdn.simpleicons.org/linkedin/1877F2"
          />
          <img
            height="32"
            width="32"
            src="https://cdn.simpleicons.org/instagram/E1306C"
          />
          <img height="32" width="32" src="https://cdn.simpleicons.org/x" />
        </div>
      </div>
    </div>
  );
};
export default TeamMemberCard;
