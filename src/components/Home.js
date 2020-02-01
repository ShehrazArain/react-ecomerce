import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

class Home extends Component {
    render() {
        return (
           <div className="home">
                <div className="row mt-5">
                    <div className="offset-lg-4 col-lg-2 col-md-4 col-sm-2 my-5">
                        <div className="card text-center shadow-lg" >
                            <img className="card-img-top" src="" alt="Dress"></img>
                            <div className="card-body">
                                <h5 className="card-title">Summer Dress</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-2 my-5">
                        <div className="card text-center shadow-lg">
                            <img className="card-img-top" src="img/product-2.jpg" alt="Dress"></img>
                            <div className="card-body">
                                <h5 className="card-title">Summer Dress</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-2 my-5">
                        <div className="card text-center shadow-lg">
                            <img className="card-img-top" src="img/product-3.jpg" alt="Dress"></img>
                            <div className="card-body">
                                <h5 className="card-title">Summer Dress</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
