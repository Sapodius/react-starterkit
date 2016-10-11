import React from 'react';
import OfferStore from '../stores/offerStore.js';
import OfferLanguageDescription from '../components/offerLanguageDescription.jsx';
import LanguageAdder from '../components/languageAdder.jsx';

class Offer extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {
        //    availableLanguage: OfferStore.getOfferLanguages(),
        //    offerDescriptions: OfferStore.getOfferDescriptions()
        //}

        this.state = OfferStore.getModel();
    }

    componentDidMount() {
        this.unsubscribe = OfferStore.listen(this.onStatusChange.bind(this));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onStatusChange() {
        //let newState = Object.assign({}, this.state);
        //newState.offerDescriptions = OfferStore.getOfferDescriptions();
        //this.setState(newState);
        this.setState(OfferStore.getModel());
    }

    handleAddButton(){
        OfferStore.createOfferDescription();
    }

    render() {
        let offerDescriptions = this.state.offerDescriptions;

        return (
            <div>
                <p>POC!!!!</p>
                <For each="description" index="i" of={offerDescriptions}>
                    <OfferLanguageDescription key={i} description={description}/>
                </For>
                <br/>
                <span>yo!</span>
                {/*<LanguageAdder onClick={this.handleAddButton.bind(this, "allemand")} language={language}/>*/}
                <button onClick={this.handleAddButton}>Add more language</button>
            </div>
        );
    }
}

export default Offer;