import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { format } from 'date-fns';
import { bindActionCreators } from 'redux';
import { initAddPay } from '../../Redux/Actions/ActionsCreators';

const AddNewPay = props => {
  return (
    <Modal
      isOpen={props.open}
      toggle={props.toggle}
      className={props.className}
    >
      <Formik
        initialValues={{
          amount: 0,
          date: format(new Date(), 'MM/DD/YYYY'),
          tax: 0
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          props.onAddPay({ ...values, debt: props.debt }, setSubmitting);
        }}
      >
        {({ handleChange, handleBlur, values }) => (
          <Form>
            <ModalHeader toggle={props.toggle}>Agregar nuevo pago</ModalHeader>
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
                  format={'MM/DD/YYYY'}
                  className="form-control"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>{' '}
              <button className="btn btn-danger" onClick={props.toggle}>
                Cancelar
              </button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onAddPay: initAddPay }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(AddNewPay);
