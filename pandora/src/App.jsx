import './App.css'
import Clients from './layouts/Clients'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import ProductCard_1 from './layouts/ProductCard_1'
import ShopCard from './layouts/ShopCard'
function App() {

  return (
    <>
      <main>
        <Header />
        <ShopCard />
        <ProductCard_1 />
        <Clients />
        <Footer />
      </main>
    </>
  )
}

export default App