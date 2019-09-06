import React, { Component } from 'react'

export default class MovieElement extends Component {

    render() {
        return (
            <div className="w-25 p-2">
                <div className="card">
                    <img alt="film" src="https://www.creative-ones.com/assets/blog/2016/09/aEsti-pregatit-pentru-viitor-Internet-of-Things-IoT-este-tot-mai-aproape-de-tine.jpg" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">CREATIVE ONES</h5>
                        <p className="card-text">These days it plays on the screen I.T. with Pierce Brosnan in the lead role. Like any American film, there are a number of reviews that catalog it as a poor film, but there are also some good reviews.
We live in the smart era of technology and custom applications. We have smartphone, smart TV, smartwatch. We want everything around us to be smarter and give us more comfort.</p>
                    </div>
                </div>
            </div>
        );
    }
}