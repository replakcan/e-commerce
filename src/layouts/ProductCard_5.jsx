/* eslint-disable react/prop-types */
import BestSellerCard from '@/components/BestSellerCard'
import Heading from '@/components/ui/heading'
import { fetchProductDetails } from '@/redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const ProductCard_5 = ({ products }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const categories = useSelector((store) => store.product.categories)

  const categoryaydi = [...products].filter((product) => product.rating > 3).slice(0, 4)

  const handleProductClick = (product) => {
    const productNameSlug = product.name.replace(/\s+/g, '-').toLowerCase()

    const category = categories.find((cat) => cat.id === product.category_id)
    const categoryName = category.code.slice(2)

    dispatch(fetchProductDetails(product.id))
    history.push(
      `/shop/${category.gender === 'k' ? 'kadin' : 'erkek'}/${categoryName}/${product.category_id}/${productNameSlug}/${
        product.id
      }`
    )
  }

  return (
    <div className="text-center bg-light_gray md:px-[10%]">
      <div className="pt-8 pb-4 md:text-left">
        <Heading variant="h3">BESTSELLER PRODUCTS</Heading>
      </div>
      <div className="flex flex-wrap items-center md:justify-between md:flex-row md:gap-7 pb-12">
        {categoryaydi?.map((bestItem, index) => (
          <BestSellerCard
            key={index}
            name={bestItem.name}
            description={bestItem.description}
            src={bestItem.images[0].url}
            price={bestItem.price}
            onClick={() => handleProductClick(bestItem)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCard_5
