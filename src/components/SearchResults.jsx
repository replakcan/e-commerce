import { AlignJustify, LayoutGrid } from 'lucide-react'
import { Button } from './ui/button'
import SortButton from './SortButton'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '@/redux/actions/productActions'
import { useState, useEffect } from 'react'
import { Input } from './ui/input'
import Heading from './ui/heading'

const SearchResults = () => {
  const dispatch = useDispatch()
  const total = useSelector((store) => store.product.total)
  const filtre = useSelector((store) => store.product.filter)

  const [inputValue, setInputValue] = useState(filtre)

  useEffect(() => {
    setInputValue(filtre)
  }, [filtre])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFilter = () => {
    dispatch(setFilter(inputValue))
  }

  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between border-b py-16">
      <Heading variant="h4">
        Showing all <span className="text-2xl text-brilliant">{total}</span> results
      </Heading>
      <div className="search-icon-btns flex flex-row items-center gap-3">
        <p>Views:</p>
        <Button variant="outline" size="iconsqr">
          <LayoutGrid />
        </Button>
        <Button variant="outline" size="iconsqr">
          <AlignJustify />
        </Button>
      </div>
      <div className="search-btns flex gap-3 flex-wrap justify-center">
        <SortButton />
        <div className="flex items-center">
          <Input type="email" placeholder="Filter products" value={inputValue} onChange={handleInputChange} />
          <Button onClick={handleFilter} type="submit">
            Filter
          </Button>
        </div>
      </div>
    </div>
  )
}
export default SearchResults
