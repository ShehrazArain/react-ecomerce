import React, { Component } from 'react';

export class Gallery extends Component {
    render() {
        return (
            <section className="Gallery mt-5">
                <div className="container">
                    <h2 className="section-heading">Our beautiful dresses</h2>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary filter" data-rel="all">All</button>
                        <button type="button" className="btn btn-primary filter" data-rel="1">Category-1</button>
                        <button type="button" className="btn btn-primary filter" data-rel="2">Category-2</button>            
                    </div>
                    <div className="gallery mt-3">
                        <div className="mb-3 pics all 2">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-1.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 29 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-2.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 39 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-3.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 54 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 2">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-4.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 98 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 2">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-5.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 23 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 2">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-6.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 56 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 2">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-7.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 76</span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-8.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price">99 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-9.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 2 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-10.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 52 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-11.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 76 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-12.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 83 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-13.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 48 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-14.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 65 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                        <div className="mb-3 pics all 1">
                            <a href="detail.html">
                                <img className="img-fluid" src="img/product-15.jpg" alt="Product"></img>
                                <p className="price-tag rounded-circle">
                                    <span className="price"> 26 </span>
                                    <span className="dollar">$</span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>  
            </section>
        );
    }
}

export default Gallery;