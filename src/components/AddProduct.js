import React, {useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const AddProduct = ({history, saveReload}) => {
    const [name, saveName] = useState('');
    const [price, saveDish] = useState('');
    const [category, saveCategory] = useState('');
    const readRadioValue = e => { saveCategory(e.target.value);}
    const [error, saveError] = useState(false);

    const addProduct = async(e) => {
        e.preventDefault();
        if(name==='' || price==='' || category==='')
            { saveError(true); return; }
        saveError(false);
        try {
            const resultado = await axios.post('http://localhost:4000/restaurant', {
                name,
                price,
                category
            });
            console.log(resultado);
            Swal.fire(
                'Added!',
                'Your file has been added.',
                'success'
            )
        }
        catch(error) {
            console.log(error);
            Swal.fire(
                'Error!',
                'Your file couldn´t be added.',
                'error'
            )
        }
        //redireccionar a /productos
        saveReload(true)
        history.push('/products');
    } 

    return(
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nuevo Producto</h1>

            <form className="mt-5" onSubmit={addProduct}>
                <div className="form-group">
                    <label>Nombre Platillo</label>
                    <input type="text" className="form-control" name="nombre" placeholder="Nombre Platillo" onChange = { e => saveName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input type="number" className="form-control" name="precio" placeholder="Precio Platillo" onChange = { e => saveDish(e.target.value)}/>
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="postre" onChange = {readRadioValue}/>
                        <label className="form-check-label">
                            Postre
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="bebida" onChange = {readRadioValue}/>
                        <label className="form-check-label">
                            Bebida
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="cortes" onChange = {readRadioValue}/>
                        <label className="form-check-label">
                            Cortes
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="ensalada" onChange = {readRadioValue}/>
                        <label className="form-check-label">
                            Ensalada
                        </label>
                    </div>
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
            </form>
        </div>
    );
}
 
export default withRouter(AddProduct);

