import React from 'react';
import { Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { format } from 'date-fns';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { initAddPay } from '../../Redux/Actions/ActionsCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formatDate, parseDate } from '../../Utils/Utils';

function AddNewDebtModal(props) {
  return (
    <Modal
      isOpen={props.open}
      toggle={props.toggle}
      className={props.className}
    >
      <Formik
        initialValues={{
          value: 0,
          date: format(new Date(), 'MM/DD/YYYY')
        }}
        onSubmit={(values, { setSubmitting }) => {
          props.onAddPay(
            { ...values, debt: props.debt._KEY, type: 'LOAN' },
            setSubmitting
          );
          props.toggle();
        }}
      >
        {({ isSubmitting, handleChange, values, handleBlur }) => (
          <Form>
            <ModalHeader toggle={props.toggle}>
              Agregar nuevo prestamo
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>Valor del prestamo</label>
                <Field className="form-control" name="value" type="number" />
              </div>
              <div className="form-group">
                <label htmlFor="">Fecha del prestamo</label>
                <br />
                <DayPickerInput
                  onDayChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  formatDate={formatDate}
                  parseDate={parseDate}
                  format={'MM/DD/YYYY'}
                  className="w-100"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Submit
              </button>{' '}
              <button
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
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onAddPay: initAddPay }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(AddNewDebtModal);
