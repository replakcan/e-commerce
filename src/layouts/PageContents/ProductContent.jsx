/* eslint-disable react-hooks/exhaustive-deps */
import Clients from '../Clients'
import MoreProducts from '../MoreProducts'
import ProductDetail from '@/components/ProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchProductDetails, fetchProductsByUserChoices } from '@/redux/actions/productActions'

const ProductContent = () => {
  const productInfo = useSelector((store) => store.product.currentProduct)
  const { categoryId, productId } = useParams()
  const dispatch = useDispatch()
  const products = useSelector((store) => store.product.productList)
  const bestSeller = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4)

  useEffect(() => {
    dispatch(fetchProductsByUserChoices(categoryId))
    dispatch(fetchProductDetails(productId))
  }, [])

  return (
    <>
      <div className="content flex flex-col">
        {productInfo && productInfo.images && (
          <ProductDetail
            src={productInfo.images[0].url}
            name={productInfo.name}
            description={productInfo.description}
            stock={productInfo.stock}
            price={productInfo.price}
            sell_count={productInfo.sell_count}
          />
        )}
        <section className="flex flex-col items-center"></section>
        <div>
          <MoreProducts bestSeller={bestSeller} />
        </div>
      </div>
      <Clients />
    </>
  )
}
export default ProductContent
