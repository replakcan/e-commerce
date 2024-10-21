import Blog from '@/layouts/Blog'
import Clients from '../layouts/Clients'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import ShopCard from '../layouts/ShopCard'
import ProductCard_1 from '@/layouts/ProductCard_1'
import ProductCard_2 from '@/layouts/ProductCard_2'
import ProductCard_3 from '@/layouts/ProductCard_3'
import ProductCard_4 from '@/layouts/ProductCard_4'
import ProductCard_5 from '@/layouts/ProductCard_5'

const HomePage = () => {

    return (
        <div className='page flex flex-col gap-6'>

            <Header />
            <ShopCard />
            <ProductCard_1 />
            <ProductCard_2 />
            <ProductCard_3 />
            <ProductCard_4 />
            <ProductCard_5 />
            <Clients />
            <Blog />
            <Footer />

        </div>
    )

}

export default HomePage;