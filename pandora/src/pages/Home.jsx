import HomeContent from '@/layouts/PageContents/HomeContent';
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'


const HomePage = () => {

    return (
        <div className='page flex flex-col gap-6 bg-blue-50'>

            <Header />
            <HomeContent />
            <Footer />

        </div>
    )

}

export default HomePage;