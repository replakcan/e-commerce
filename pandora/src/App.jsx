import { Switch, Route } from 'react-router-dom';
import './App.css'

import HomePage from './pages/Home'
import Contact from './pages/Contact';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Team from './pages/Team';
import About from './pages/About';
function App() {

  return (

    <main className='flex flex-col'>

      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/shop">
          <Shop />
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
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </main >

  )
}

export default App