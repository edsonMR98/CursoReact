import React, {Fragment} from 'react';
import Product from './Product'

const Products = ({products}) => {
    console.log(products)
    
    return(
        <Fragment>
            <div className="container">
                <ul clss='list-group mt-5'>
                {products.map(oneProduct => (
                        <Product key={oneProduct.id}  product={oneProduct} />
                    ))}
                </ul>
            </div>
        </Fragment>
     
    )
}
 
export default Products;