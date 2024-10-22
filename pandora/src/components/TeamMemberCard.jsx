const TeamMemberCard = () => {

    return (
        <div className="flex flex-col items-center md:w-[24%]">
            <img className="" src="./images/team/erhan_firat.png" />
            <div className="flex flex-col gap-2 pt-2">
                <p>Erhan ÖZDEMİR</p>
                <p>Scrum Master</p>
                <div className="flex gap-2 justify-center">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>

    )
}
export default TeamMemberCard;