import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  renderCar() {
    return (
      <div className="card-car-unique">
        <div className="card-car-unique-image">
          <img src="../assets/images/voiture_oui_oui.jpg" alt="Voiture de oui-oui"/>
        </div>
        <div className="card-car-unique-details">
          <h2>{this.props.car.brand} - {this.props.car.model}</h2>
          <p>owner : {this.props.car.owner}</p>
          <p className="immatriculation">{this.props.car.plate}</p>
        </div>
      </div>
    )
  }

  render() {
    if (!this.props.car) {
      return <p>No cars to show</p>
    }

    return (
      <div>
        <div className="details-garage">
          <div className="picture-of-garage">
            <img src="../assets/images/midas.jpg" alt="Image of garage"/>
          </div>
          <div className="cta-to-add-car">
            <h1>Garage Midas</h1>
            <p>Entretien et Service automobile à destination du grand public pour toutes les bourses et toutes les voitures sauf celles qui fonctionnent</p>
            <Link className="btn btn-primary btn-cta" to="/">
              Revenir à la liste
            </Link>
          </div>
        </div>
        <div className="cars-list">
          {this.renderCar()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
