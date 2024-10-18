import './App.css'
import Clients from './layouts/Clients'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import ProductCard_1 from './layouts/ProductCard_1'
import ProductCard_2 from './layouts/ProductCard_2'
import ProductCard_3 from './layouts/ProductCard_3'
import ShopCard from './layouts/ShopCard'
function App() {

  return (

    <main className='flex flex-col gap-20'>
      <Header />
      <ShopCard />
      <ProductCard_1 />
      <ProductCard_2 />
      <ProductCard_3 />
      <Clients />
      <Footer />
    </main>

  )
}

export default App