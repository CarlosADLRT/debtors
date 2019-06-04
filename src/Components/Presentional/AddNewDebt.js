import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import * as Actions from '../../Redux/Actions/ActionsCreators';
import { bindActionCreators } from 'redux';
import { formatDate, parseDate } from '../../Utils/Utils';
import { format } from 'date-fns';

class AddNewDebt extends Component {
  state = {
    modal: false
  };

  onDateChange = date => {
    this.setState({ date });
  };

  onFocusChange = ({ focused }) => {
    this.setState({ focused });
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            debtor: '',
            debt: 0,
            start: format(new Date(), 'MM/DD/YYYY'),
            tax: 0
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            this.props.onAddNewDebt(
              { ...values, tax: values.tax / 100, taxesDebt: 0 },
              setSubmitting
            );
          }}
        >
          {({ isSubmitting, handleChange, handleBlur, values }) => (
            <Form>
              <h4>Agregar un nuevo prestamo</h4>
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <Field className="form-control" type="text" name="debtor" />
              </div>
              <div className="form-group">
                <label htmlFor="">Valor del prestamo</label>
                <Field className="form-control" type="number" name="debt" />
              </div>
              <div className="form-group">
                <label htmlFor="">Fecha del prestamo</label>
                <br />
                <DayPickerInput
                  onDayChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                  formatDate={formatDate}
                  parseDate={parseDate}
                  format={'MM/DD/YYYY'}
                  className="w-100"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Intereses</label>
                <Field className="form-control" type="number" name="tax" />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onAddNewDebt: Actions.addNewDebt }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewDebt);
