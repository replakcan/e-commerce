/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Heading from './ui/heading'

const CategoryCard = ({ title, src, gender, category, id }) => {
  return (
    <Link
      className="flex justify-center hover:scale-105 transition-transform duration-300"
      to={`/shop/${gender}/${category}/${id}`}
    >
      <div className="grid w-[80%] grid-cols-3 grid-rows-3 md:max-h-[250px] md:max-w-[250px] overflow-hidden items-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          className="col-start-1 col-end-4 row-start-1 row-end-4 object-cover aspect-square"
          src={src}
          alt={`${title} image`}
        />
        <div className="col-start-2 row-start-2 col-end-3 row-end-3 flex flex-col justify-around items-center">
          <p className="text-white font-bold">{gender}</p>
          <Heading variant="h3" color="text-white">
            {title}
          </Heading>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
