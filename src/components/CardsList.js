import React, { Component } from "react";
import CardDataService from "../services/card.service";
import { Link } from "react-router-dom";
import CardObj from './CardObj';

export default class CardsList extends Component {
  constructor(props) {
    super(props);
    this.retrieveCards = this.retrieveCards.bind(this);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.retrieveCards();
  }


  retrieveCards() {
    CardDataService.getAll()
      .then(response => {
        this.setState({
          cards: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { cards } = this.state;

       return (
//         <div className="list row">
//           <div className="col-md-6">
//             <h4>Cards List</h4>
//
//             <ul className="list-group">
//               {cards &&
//                 cards.map((card, index) => (
//                   <li className="list-group-item">
//                       {card.name}
//                    </li>
//
//
//                 ))}
//             </ul>
//           </div>
//         </div>

 <React.Fragment>
      <div className="card-list">
        {cards ? (
          cards.map((card) => (
            <CardObj key={card.id} {...card}  />
          ))
        ) : (
          <p className="message">No cards available. Please add some cards.</p>
        )}
      </div>
    </React.Fragment>
       );
     }
  }
