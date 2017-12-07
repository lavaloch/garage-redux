import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars(){
    return this.props.cars.map((cars) => {
      return (
        <Link to={`/cars/${cars.id}`} key={cars.id}>
          <div className="card-car">
            <div className="image-of-car"></div>
            <div className="details-of-car">
              <h2>{cars.brand}</h2>
              <p>Owner : {cars.owner}</p>
            </div>
          </div>
        </Link>
        )
    });
  }

  render() {
    return (
      <div>
        <div className="details-garage">
          <div className="picture-of-garage">
            <img src="../assets/images/midas.jpg" alt="Image of garage"/>
          </div>
          <div className="cta-to-add-car">
            <h1>Garage Midas</h1>
            <p>Entretien et Service automobile à destination du grand public pour toutes les bourses et toutes les voitures sauf celles qui fonctionnent</p>
            <Link className="btn btn-primary btn-cta" to="/cars/new">
              Enregistrez une voiture
            </Link>
          </div>
        </div>
        <div className="cars-list">
          {this.renderCars()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
