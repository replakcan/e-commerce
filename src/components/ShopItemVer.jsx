/* eslint-disable react/prop-types */
import Heading from './ui/heading'

const ShopItemVer = ({ name, onClick, description, price, src }) => {
  return (
    <div
      onClick={onClick}
      className="shopItemVertical relative flex flex-col md:w-[32%] md:h-[48%] text-center bg-gray-50 w-[80%] border rounded overflow-hidden transition-transform transform hover:scale-95 hover:shadow-inner cursor-pointer"
    >
      <div className="overflow-hidden relative">
        <img src={src} className="w-full h-full aspect-[3/4] border rounded-md object-cover" alt={`${name}`} />
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-2xl font-semibold text-white">
            click to see <br /> product details
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <Heading variant="h4">{name}</Heading>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-900 font-semibold">${price}</p>
      </div>
    </div>
  )
}

export default ShopItemVer
