import SearchResults from '@/components/SearchResults'
import ShopProductCards from '../ShopProductCards'
import Categories from '../Categories'
import Clients from '../Clients'
import { useEffect, useState } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProductsByUserChoices,
  setSort,
  setFilter,
  setLimit,
  setOffset,
  fetchProducts,
} from '@/redux/actions/productActions'

const ShopContent = () => {
  const [isParamsLoaded, setIsParamsLoaded] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const { gender, categoryId, categoryName } = useParams()

  const { sort, filter, limit, offset } = useSelector((store) => store.product)

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const initialSort = queryParams.get('sort') || ''
    const initialFilter = queryParams.get('filter') || ''
    const initialLimit = queryParams.get('limit') || '24'
    const initialOffset = queryParams.get('offset') || ''

    dispatch(setSort(initialSort))
    dispatch(setFilter(initialFilter))
    dispatch(setLimit(initialLimit))
    dispatch(setOffset(initialOffset))

    setIsParamsLoaded(true)
  }, [location.search, dispatch])

  useEffect(() => {
    if (isParamsLoaded) {
      const queryParamsObject = {}
      if (sort) queryParamsObject.sort = sort
      if (filter) queryParamsObject.filter = filter
      if (limit) queryParamsObject.limit = limit
      if (offset) queryParamsObject.offset = offset

      const queryParams = new URLSearchParams(queryParamsObject)
      const queryString = queryParams.toString() ? `?${queryParams.toString()}` : ''

      if (categoryId) {
        dispatch(fetchProductsByUserChoices(categoryId, sort, filter, limit, offset))
        history.push(`/shop/${gender}/${categoryName}/${categoryId}${queryString}`)
      } else {
        dispatch(fetchProducts(sort, filter, limit, offset))
        history.push(`/shop${queryString}`)
      }
    }
  }, [isParamsLoaded, gender, categoryId, categoryName, sort, filter, limit, offset, dispatch, history])

  return (
    <div className="content flex flex-col gap-20">
      <Categories />
      <section className="flex flex-col gap-20">
        <SearchResults />
        <ShopProductCards />
      </section>
      <Clients />
    </div>
  )
}

export default ShopContent
