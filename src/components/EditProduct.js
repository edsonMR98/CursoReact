import React, {useState} from 'react';
import {useRef} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const EditProduct = ({history, product, saveReload}) => {
    const [category, saveCategory] = useState('');
    const readRadioValue = e => { saveCategory(e.target.value);}
    const [error, saveError] = useState(false);
    const nameRef = useRef('');
    const priceRef = useRef('');

    const editProduct = async(e) => {
        e.preventDefault();
        console.log(product)
        try {
            const editDish = {
                name : nameRef.current.value,
                price : priceRef.current.value,
                category,
                id: product.id
            }
            console.log(editDish)
            const resultado = await axios.put(`http://localhost:4000/restaurant/${product.id}`, {
                name: editDish.name,
                price: editDish.price,
                category: editDish.category
            });
            Swal.fire(
                'Edited!',
                'Your file has been "edited".',
                'success'
            )
        }
        catch(error) {
            console.log(error);
            Swal.fire(
                'Error!',
                'Your file couldn´t be edited.',
                'error'
            )
        }
        saveReload(true)
        history.push('/products');
    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Modificar Nuevo Producto</h1>

            <form className="mt-5" onSubmit={editProduct}>
                <div className="form-group">
                    <label>Nombre Platillo</label>
                    <input type="text" className="form-control" name="nombre" placeholder="Nombre Platillo" ref={nameRef} defaultValue={product.name} />
                </div>
                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input type="number" className="form-control" name="precio" placeholder="Precio Platillo" ref={priceRef} defaultValue={product.price} />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="postre" defaultChecked={product.category === 'postre'} onChange = {readRadioValue}/>
                        <label className="form-check-label">
                            Postre
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="bebida" defaultChecked={product.category === 'bebida'} onChange = {readRadioValue}/>
                        <label className="form-check-label">
                            Bebida
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="cortes" defaultChecked={product.category === 'cortes'} onChange = {readRadioValue}/>
                        <label className="form-check-label">
                            Cortes
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="ensalada" defaultChecked={product.category === 'ensalada'} onChange = {readRadioValue}/>
                        <label className="form-check-label">
                            Ensalada
                        </label>
                    </div>
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Producto" />
            </form>
        </div>
    );
}
 
export default withRouter(EditProduct);