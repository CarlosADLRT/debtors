import React from 'react';
import { Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { format } from 'date-fns';
import { DayPickerInput } from 'react-day-picker/DayPickerInput';

export default function AddNewDebt(props) {
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
          // props.onAddPay({ ...values, debt: props.debt }, setSubmitting);
          // props.toggle();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <ModalHeader toggle={props.toggle}>
              Agregar nuevo prestamo
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>Valor del prestamo</label>
                <Field className="form-control" name="value" type="number" />
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
