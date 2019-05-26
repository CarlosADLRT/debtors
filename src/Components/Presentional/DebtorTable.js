import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLoadDebtors } from '../../Redux/Actions/ActionsCreators';
import { format } from 'date-fns';
import AddNewPay from '../Modals/AddNewPay';
import { moneyFormatter } from '../../Utils/Utils';

const DebtorTable = props => {
  const [modal, setModal] = useState(false);
  const [debt, setDebt] = useState(null);

  useEffect(() => {
    props.requestLoadDebtors();
  }, []);

  return (
    <Fragment>
      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Deudores</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha del prestamo</th>
                  <th>Intereses</th>
                  <th>Deuda actual</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {props.debts.map(i => (
                  <tr key={i._KEY}>
                    <td>{i.debtor}</td>
                    <td>{format(i.start, 'DD/MM/YYYY')}</td>
                    <td>{i.tax * 100}%</td>
                    <td>{moneyFormatter(i.debt)}</td>
                    <td>
                      <button
                        onClick={() => {
                          setModal(!modal);
                          setDebt(i._KEY);
                        }}
                        className="btn btn-primary mr-3"
                      >
                        Agregar pago
                      </button>
                      <button
                        // onClick={this.toggle}
                        className="btn btn-primary mr-3"
                      >
                        Ver pagos
                      </button>
                      <button className="btn btn-primary">
                        Agregar Prestamo
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {modal && (
        <AddNewPay debt={debt} open={modal} toggle={() => setModal(!modal)} />
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ DebtsReducer }) => {
  return { ...DebtsReducer };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestLoadDebtors }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DebtorTable);
