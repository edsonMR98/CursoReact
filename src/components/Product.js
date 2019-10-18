import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const deleteProduct = id => {
        console.log('eliminando: ', id);
    }
   
    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <p>
                {product.nombre}
                <span className='font-weight-bold'> ${product.precio} </span>
                ({product.categoria})
            </p>
            <div> 
                <Link to={`/productos/editar/${product.id}`} className='btn btn-success mr-2'>
                    Edit 
                </Link>
                <button type='button' className='btn btn-danger' onClick={() => deleteProduct(product.id)} >
                    Delete
                </button>
            </div>
        </li>
    )
}
 
export default Product;