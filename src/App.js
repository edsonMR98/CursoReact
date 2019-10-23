import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';
import EditProduct from './components/EditProduct'

function App() {
  const [productos, guardarProducts] = useState([]);
  const [reload, saveReload] = useState(true);
  useEffect( () => { const consultarApi = async () => {
    if (reload) {
      const resultado = await axios.get('http://localhost:4000/restaurant');
      console.log(resultado.data);	
      guardarProducts(resultado.data);
    }
    saveReload(false)
  }
  consultarApi();
  },[reload]);

  return (
    <Router>
      <Header/>
      <main className="mt-5">
        <Switch>
          <Route exact path='/products' render={ () => (
            <Products products={productos}/>
          ) } />

          <Route exact path="/products" component={Products}/>
          <Route exact path="/products-new" render={ () =>(
            <AddProduct saveReload={saveReload}/>
          )}/>
          <Route exact path="/products/:id" component={Product}/>
          <Route exact path="/products/edit/:id" component={EditProduct}/>
          <Route exact path="/products/edit/:id" render={ props => {
            const idProduct = parseInt(props.match.params.id)
            const product = productos.filter(product => product.id === idProduct)
            return (
              <EditProduct product={product[0]}/>
            )
          }}/>
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
