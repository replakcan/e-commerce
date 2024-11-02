import './App.css'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home'
import Contact from './pages/Contact';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Team from './pages/Team';
import About from './pages/About';
import SepetPage from './pages/Sepet';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CreateOrderPage from './pages/ConfirmOrder';
import HeaderNav from './components/HeaderNav';
import Footer from './layouts/Footer';
import { autoLogin, fetchRoles } from './redux/actions/clientActions';
import { fetchCategories, fetchProducts } from './redux/actions/productActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';



function App() {

  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    dispatch(fetchRoles())
    dispatch(fetchCategories())
    dispatch(fetchProducts())
    if (token) {
      dispatch(autoLogin(token))
    }

  }, [])

  return (
    <main className='flex flex-col'>
      <HeaderNav />
      <Switch>
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
          <Product />
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId?/:sort?/:filter?/:limit?/:offset?">
          <Shop />
        </Route>
        <Route path="/shop/:gender/:category">
          <Shop />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/siparis-ozeti">
          <SepetPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/siparis-ozeti">
          <SepetPage />
        </Route>
        <PrivateRoute path="/confirm-order">
          <CreateOrderPage />
        </PrivateRoute>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </main >

  )
}

export default App