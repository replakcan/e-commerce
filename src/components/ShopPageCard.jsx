/* eslint-disable react/prop-types */
import Heading from './ui/heading'

const ShopPageCard = ({ name, description, price, src, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="ShopPageCard flex flex-col text-center flex-wrap bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-shadow duration-150 cursor-pointer items-center"
    >
      <div className="max-h-[400px] max-w-[350px] overflow-hidden">
        <img src={src} alt={name} className="transition-opacity duration-200 hover:opacity-90" />
      </div>
      <div className="p-4 flex flex-col gap-3 max-w-[300px]">
        <Heading variant="h4">{name}</Heading>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default ShopPageCard
