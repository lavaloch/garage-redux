import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { createCar } from '../actions';

class CarsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // componentDidMount() {
  //   this.inputBox.focus();
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.createCar(this.state.value);
  //   this.setState({ value: '' });
  // }

  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  renderNewCar(field) {
    return (
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/garage.jpg')"}}>
        <div className="overlay"></div>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              label="Brand"
              name="brand"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Model"
              name="model"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Owner"
              name="owner"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Plate"
              name="plate"
              type="text"
              component={this.renderField}
            />
            <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>Create car</button>
          </form>
      </div>
    );
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
            <Link className="btn btn-primary btn-cta" to="/">
              Get Back
            </Link>
          </div>
        </div>
        <div className="cars-list">
          {this.renderNewCar()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
