import React from 'react';

class OfferLanguageDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.description.name,
            description: this.props.description.description,
            language: this.props.description.language
        }
    }

    handleChange(event){
        let newState = Object.assign({}, this.state);
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <label>Offer name</label> <input value={this.state.name} onChange={this.handleChange.bind(this)} name="name"></input>
                <label>Offer description</label> <textarea value={this.state.description} onChange={this.handleChange.bind(this)} name="description"></textarea>
                <select value={this.state.language}>
                    <option value=""></option>
                    <option value="french">french</option>
                    <option value="english">english</option>
                    <option value="chinesse">chinesse</option>
                </select>
            </div>
        );
    }
}

export default OfferLanguageDescription;