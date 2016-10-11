import Reflux from 'reflux';

let OfferStore = Reflux.createStore({
  model: {
    offerDescriptions: [],
    offerLanguages: [],
  },


  init() {

    this.model.offerDescriptions = [
      {
        name: 'test1',
        description: 'This is a test!!!',
        language: 'english'
      },
      {
        name: 'testeeee',
        description: 'This is another test!!!',
        language: 'french'
      }
    ];

    this.model.offerLanguages = ['english', 'french', 'chinesse'];

  },

    getModel(){
      return this.model;
    },

  getOfferDescriptions(){
    return this.model.offerDescriptions;
  },

  createOfferDescription(){

    console.log("Trying to create stuff!!! Async call!");

    this.model.offerDescriptions.push({
      name:"",
      description:"",
      language:""
    });

    setTimeout(() => {
      this.trigger();
    }, 3000);
  },

  getOfferLanguages(){
    return this.model.offerLanguages;
  },

  addOfferDescription(description){
    this.model.offerDescriptions.push(description);

  }

});

window.OfferStore = OfferStore;
export default OfferStore;
