import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { format } from 'date-fns';

class AddNewPay extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.open}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle}>Agregar nuevo pago</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              debt: 0,
              start: format(new Date(), 'MM/DD/YYYY')
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, values }) => (
              <Form>
                <div className="form-group">
                  <label>Monto pagado</label>
                  <Field className="form-control" name="debt" type="number" />
                </div>
                <div className="form-group">
                  <label>Fecha del pago</label>
                  <br />
                  <DayPickerInput
                    onDayChange={handleChange}
                    onBlur={handleBlur}
                    value={values.start}
                    formatDate={this.formatDate}
                    parseDate={this.parseDate}
                    format={'MM/DD/YYYY'}
                    className="form-control"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.props.toggle}
          >
            Agregar pago
          </button>{' '}
          <button className="btn btn-danger" onClick={this.props.toggle}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewPay);
