import React, { Component } from 'react';

export default class DogDetails extends Component {
    render() {
        console.log("[DogDetails][render] => this.props:", this.props);
        return (
            <div>
                <h1>{this.props.dog.name}</h1>
            </div>
        )
    }
}
