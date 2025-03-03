import ShopItem from '@/components/ShopItem'
import { useSelector } from 'react-redux'

const ShopCard = () => {
  const products = useSelector((store) => store.product.productList)

  const bestOfThree = [...products].sort((a, b) => b.rating - a.rating).slice(0, 3)

  return (
    <div className="shop-card flex flex-col lg:flex-row md:justify-between items-center gap-5 md:px-[10%] bg-light_gray py-24">
      {bestOfThree.map((bot, index) => {
        return <ShopItem key={index} product={bot} src={bot.images[0].url} />
      })}
    </div>
  )
}

export default ShopCard
