/* eslint-disable react/prop-types */
import Heading from '@/components/ui/heading'
import { fetchProductDetails } from '@/redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const ProductCard_4 = ({ mostPopi }) => {
  const categories = useSelector((store) => store.product.categories)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleProductClick = (product) => {
    const productNameSlug = product.name.replace(/\s+/g, '-').toLowerCase()
    const category = categories.find((cat) => cat.id === product.category_id)
    const categoryName = category.code?.slice(2)

    dispatch(fetchProductDetails(product.id))
    history.push(
      `/shop/${category.gender === 'k' ? 'kadin' : 'erkek'}/${categoryName}/${product.category_id}/${productNameSlug}/${
        product.id
      }`
    )
  }

  return (
    <div className="productCard_4 md:rounded-3xl overflow-hidden flex flex-col items-center gap-12 md:gap-0 pb-8">
      <div className="popularImg bg-mars">
        <img
          className="w-full h-full object-cover object-[80%]"
          src="./images/productCard/pexels-photo-845434.jpeg"
          alt=""
        />
      </div>

      <div className="popular w-full h-full">
        <div
          className="h-full flex flex-col justify-center gap-4 bg-light_gray p-8 text-center cursor-pointer transition-colors duration-300 hover:bg-gray-300"
          onClick={() => handleProductClick(mostPopi)}
        >
          <Heading variant="h3">MOST POPULAR</Heading>
          <p>{mostPopi?.description}</p>

          <div className="relative border rounded-xl overflow-hidden group">
            <img
              className="transition-transform duration-300 transform group-hover:scale-105 group-hover:blur-sm"
              src={mostPopi?.images[0].url}
              alt={`${mostPopi?.name}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-brilliant text-lg font-bold">
                click to see <br />
                product details
              </p>
            </div>
          </div>

          <Heading variant="h4">{mostPopi?.name}</Heading>
          <p>${mostPopi?.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard_4
