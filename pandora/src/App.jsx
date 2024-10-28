import { Switch, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home'
import Contact from './pages/Contact';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Team from './pages/Team';
import About from './pages/About';
import HeaderNav from './components/HeaderNav';
import Footer from './layouts/Footer';
import SignUp from './pages/SignUp';
import { useEffect } from 'react';
import { autoLogin, fetchRoles } from './redux/actions/clientActions';
import { useDispatch } from 'react-redux';
import Login from './pages/Login';
import { fetchCategories, fetchProducts } from './redux/actions/productActions';


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
      <Route path="/shop/:gender/:categoryName/:categoryId/:sort?">
          <Shop />
        </Route>
        <Route path="/shop/:gender/:category">
          <Shop />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/product">
          <Product />
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
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </main >

  )
}

export default App