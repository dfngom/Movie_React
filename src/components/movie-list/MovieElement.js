import React, { Component } from 'react'

export default class MovieElement extends Component {

    render() {
        return (
            <div className="w-50 p-2">
                <div className="border d-flex">
                    <img width="150" height="200" alt="film" src="https://www.creative-ones.com/assets/blog/2016/09/aEsti-pregatit-pentru-viitor-Internet-of-Things-IoT-este-tot-mai-aproape-de-tine.jpg" />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5 >Titre</h5>
                        <hr className="w-100" />
                        <p >These days it plays on the screen I.T. with Pierce Brosnan in the lead role. Like any American film, there are a number of reviews that catalog it as a poor film....</p>
                    </div>
                </div>
            </div>
        );
    }
}