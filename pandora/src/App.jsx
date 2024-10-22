import { Switch, Route } from 'react-router-dom';
import './App.css'

import HomePage from './pages/Home'
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Team from './pages/Team';
function App() {

  return (

    <main className='flex flex-col'>

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
      </Switch>
    </main >

  )
}

export default App