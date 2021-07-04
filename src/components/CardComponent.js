import React, { Component } from "react";
import CardDataService from "../services/card.service";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeLimit = this.onChangeLimit.bind(this);
    this.getCard = this.getCard.bind(this);

    this.state = {
      currentCard: {
        id: null,
        name: "",
        number: "",
        limit: 0
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCard(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCard: {
          ...prevState.currentCard,
          name: name
        }
      };
    });
  }

  onChangeNumber(e) {
    const number = e.target.value;

    this.setState(prevState => ({
      currentCard: {
        ...prevState.currentCard,
        number: number
      }
    }));
  }

    onChangeLimit(e) {
      const limit = e.target.value;

      this.setState(prevState => ({
        currentCard: {
          ...prevState.currentCard,
          limit: limit
        }
      }));
    }

  getCard(id) {
    CardDataService.get(id)
      .then(response => {
        this.setState({
          currentCard: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


 render() {
     const { currentCard } = this.state;

     return (
           <div className="edit-form">
             <h4>Card</h4>
             <form>

               <div className="form-group">
                 <label htmlFor="name">Name</label>
                 <input
                   type="text"
                   className="form-control"
                   id="name"
                   value={currentCard.name}
                   onChange={this.onChangeName}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="number">Number</label>
                 <input
                   type="text"
                   className="form-control"
                   id="number"
                   value={currentCard.number}
                   onChange={this.onChangeNumber}
                 />
               </div>

               <div className="form-group">
                       <label htmlFor="limit">Limit</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="limit"
                                  value={currentCard.limit}
                                  onChange={this.onChangeLimit}
                                />
                              </div>

             </form>

             <p>{this.state.message}</p>
           </div>
         )
   }

}