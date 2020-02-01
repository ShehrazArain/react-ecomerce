import React, { Component } from 'react';

export class CallToAction extends Component {
    render() {
        return (
            <section className="call-to-action py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8" >
                            <h3 className="call-to-action-heading text-center">Did You Like Discount?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi sint exercitationem doloremque perferendis? Tenetur, animi. Dolorem doloribus suscipit quibusdam dolor fugit laudantium nulla praesentium, amet, at, quia voluptatum cumque.</p>
                        </div>
                        <div className="col-lg-4">
                            <button className="btn btn-lg btn-outline-secondary mt-4">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CallToAction;
