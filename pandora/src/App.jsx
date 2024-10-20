import { Switch, Route } from 'react-router-dom';
import './App.css'

import HomePage from './pages/Home'
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
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
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </main>

  )
}

export default App