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
          value: 0,
          date: format(new Date(), 'MM/DD/YYYY'),
          taxes: 0
        }}
        onSubmit={(values, { setSubmitting }) => {
          props.onAddPay({ ...values, debt: props.debt }, setSubmitting);
          props.toggle();
        }}
      >
        {({ handleChange, handleBlur, values, isSubmitting, error }) => (
          <Form>
            <ModalHeader toggle={props.toggle}>Agregar nuevo pago</ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>Abono a capital</label>
                <Field className="form-control" name="value" type="number" />
              </div>
              <div className="form-group">
                <label>Abono a interes</label>
                <Field className="form-control" name="taxes" type="number" />
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
              <button
                type="submit"
                disabled={isSubmitting || error}
                className="btn btn-primary"
              >
                Submit
              </button>{' '}
              <button
                type="button"
                className="btn btn-danger"
                disabled={isSubmitting}
                onClick={props.toggle}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

const mapStateToProps = ({ DebtsReducer }) => ({
  ...DebtsReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onAddPay: initAddPay }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewPay);
