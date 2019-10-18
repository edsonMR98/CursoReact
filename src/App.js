import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import ModifyProduct from './components/ModifyProduct';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  const [productos, guardarProducts] = useState([]);
  useEffect( () => { const consultarApi = async () => {
    const resultado = await axios.get('http://localhost:4000/restaurant');
    console.log(resultado.data);	
    guardarProducts(resultado.data); 
  }
  consultarApi();
  },[]);

  return (
    <Router>
      <Header/>
      <main className="mt-5">
        <Switch>
          <Route exact path='/products' render={ () => (
            <Products products={productos}/>
          ) } />

          <Route exact path="/products" component={Products}/>
          <Route exact path="/products-new" component={AddProduct}/>
          <Route exact path="/products/:id" component={Product}/>
          <Route exact path="/products/edit/:id" component={ModifyProduct}/>
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
