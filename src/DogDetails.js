import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./DogDetails.css";

export default class DogDetails extends Component {
    render() {
        console.log("[DogDetails][render] => this.props:", this.props);

        let { dog } = this.props;
        return (
            <div className="container">
                <div className="DogDetails row justify-content-center mt-5">
                    <div className="col-11 col-lg-5">
                        <div className="DogDetails-card card">
                            <img className="card-img-top" src={dog.src} alt={dog.name}/>
                            <div className="card-body">
                                <h2 className="card-title">{dog.name}</h2>
                                <h4 clasName="card-subtitle text-muted">
                                    {dog.age} years old
                                </h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                {dog.facts.map((fact, index) => (
                                    <li className="list-group-item" key={index}>{fact}</li>
                                ))}
                            </ul>
                            <div className="card-body">
                                <Link to="/dogs" className="btn btn-info">Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
