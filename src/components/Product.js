import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Product = ({product}) => {
    const deleteProduct = id => {
        console.log('Deleting: ', id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async(result) => {
            if (result.value) {
                try {
                    const url =`http://localhost:4000/restaurant/${id}`;
	                const resultado = await axios.delete(url);
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                } catch {

                }
            }
        })
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