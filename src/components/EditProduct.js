import React, {useState, useRef} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const EditProduct = ({product}) => {
    const [name, saveName] = useState('');
    const [price, saveDish] = useState('');
    const [category, saveCategory] = useState('');
    const readRadioValue = e => { saveCategory(e.target.value);}
    const [error, saveError] = useState(false);
    const nameRef = useRef('');
    const priceRef = useRef('');

    const editProduct = e => {
        e.preventDefault();
        if(name==='' || price==='' || category==='')
            { saveError(true); return; }
        saveError(false);
        try {
            /*const resultado = await axios.post('http://localhost:4000/restaurant', {
                name,
                price,
                category
            });
            console.log(resultado);*/
            Swal.fire(
                'Edited!',
                'Your file has been edited.',
                'success'
            )
        }
        catch(error) {
            console.log(error);
            //sweet Alert
            }
        //redireccionar a /productos
    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Modificar Nuevo Producto</h1>

            <form className="mt-5" onSubmit={editProduct}>
                <div className="form-group">
                    <label>Nombre Platillo</label>
                    <input type="text" className="form-control" name="nombre" placeholder="Nombre Platillo" ref={nameRef} defaultValue={product.name} onChange = { e => saveName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input type="number" className="form-control" name="precio" placeholder="Precio Platillo" ref={priceRef} defaultValue={product.price} onChange = { e => saveDish(e.target.value)}/>
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
 
export default EditProduct;