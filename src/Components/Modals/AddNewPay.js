import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { format } from 'date-fns';
import { bindActionCreators } from 'redux';
import { initAddPay } from '../../Redux/Actions/ActionsCreators';

class AddNewPay extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.open}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <Formik
          initialValues={{
            amount: 0,
            date: format(new Date(), 'MM/DD/YYYY'),
            tax: 0
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            this.props.onAddPay(
              { ...values, debt: this.props.debt },
              setSubmitting
            );
          }}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form>
              <ModalHeader toggle={this.props.toggle}>
                Agregar nuevo pago
              </ModalHeader>
              <ModalBody>
                <div className="form-group">
                  <label>Abono a capital</label>
                  <Field className="form-control" name="amount" type="number" />
                </div>
                <div className="form-group">
                  <label>Abono a interes</label>
                  <Field className="form-control" name="tax" type="number" />
                </div>
                <div className="form-group">
                  <label>Fecha del pago</label>
                  <br />
                  <DayPickerInput
                    onDayChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                    formatDate={this.formatDate}
                    parseDate={this.parseDate}
                    format={'MM/DD/YYYY'}
                    className="form-control"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>{' '}
                <button className="btn btn-danger" onClick={this.props.toggle}>
                  Cancelar
                </button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onAddPay: initAddPay }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewPay);
