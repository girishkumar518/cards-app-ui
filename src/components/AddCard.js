import React, { Component } from "react";
import CardDataService from "../services/card.service";

export default class AddCard extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeLimit = this.onChangeLimit.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.newCard = this.newCard.bind(this);

    this.state = {
      id: null,
      name: "",
      number: "",
      limit: 0,

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }

    onChangeLimit(e) {
      this.setState({
        limit: e.target.value
      });
    }


  saveCard() {
    var data = {
      name: this.state.name,
      number: this.state.number,
      limit: this.state.limit
    };

    CardDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          number: response.data.number,
          limit: response.data.limit,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newCard() {
    this.setState({
      id: null,
      name: "",
      number: "",
      limit: 0,

      submitted: false
    });
  }

  render() {
      return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newCard}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="number">Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  required
                  value={this.state.number}
                  onChange={this.onChangeNumber}
                  name="number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="limit">Limit</label>
                <input
                  type="text"
                  className="form-control"
                  id="limit"
                  required
                  value={this.state.limit}
                  onChange={this.onChangeLimit}
                  name="limit"
                />
              </div>


              <button onClick={this.saveCard} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    }
  }