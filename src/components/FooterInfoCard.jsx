/* eslint-disable react/prop-types */
import Heading from './ui/heading'

const FooterInfoCard = ({ title, infosman }) => {
  return (
    <>
      <div className="footer-info w-fit">
        <Heading className="text-white font-bold underline" variant="h6">
          {title}
        </Heading>
        <ul>
          {infosman.map((info, index) => {
            return (
              <p className="text-white" key={index}>
                {info}
              </p>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default FooterInfoCard
