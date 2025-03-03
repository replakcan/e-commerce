const TeamGrid = () => {
  return (
    <>
      <div className="team grid grid-cols-2 grid-rows-4 gap-2 md:grid-cols-4 md:grid-rows-2">
        <div className="w-full h-full col-start-1 col-end-3 row-start-1 row-end-3 md:col-start-1 col-end-3 row-start-1 row-end-3">
          <img className="teamImg" src="./images/team/team_member_1.png" />
        </div>
        <div className="w-full h-full col-start-1 col-end-2 row-start-3 row-end-4 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">
          <img className="teamImg" src="./images/team/team_member_2.png" />
        </div>
        <div className="w-full h-full col-start-2 col-end-3 row-start-3 row-end-4 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2">
          <img className="teamImg" src="./images/team/team_member_3.png" />
        </div>
        <div className="w-full h-full col-start-1 col-end-2 row-start-4 row-end-5 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3">
          <img className="teamImg" src="./images/team/team_member_4.png" />
        </div>
        <div className="w-full h-full col-start-2 col-end-3 row-start-4 row-end-5 md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-3">
          <img className="teamImg" src="./images/team/team_member_1.png" />
        </div>
      </div>
    </>
  )
}
export default TeamGrid
