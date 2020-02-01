import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { Link } from 'react-router-dom'; 

class Navb extends Component {
    render() {
        return (
           <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Shopper</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"> <i className="fa fa-bars"></i> </span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-pill btn-primary" href="#"><i class="fas fa-shopping-cart mr-1"></i>2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
           </div>
           
        )
    } 
}

export default Navb;