// imr
import React from 'react';
import {Link} from 'react-router-dom';
// sfc
const Header = () => {
    return(
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            
                <Link to="/products" className="navbar-brand">
                    React CRUD
                </Link>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbarColor01" style={{}}>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">
                            Productos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products-new" className="nav-link">
                            Agregar Productos
                        </Link>
                    </li>
                </ul>
                </div>
             
        </nav>
    )
}
 
export default Header;