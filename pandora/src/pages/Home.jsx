import PageContent from '@/layouts/PageContent'
import Clients from '../layouts/Clients'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import ShopCard from '../layouts/ShopCard'

const HomePage = () => {

    return (
        <>
            <Header />
            <ShopCard />
            <PageContent />
            <Clients />
            <Footer />
        </>
    )

}

export default HomePage;