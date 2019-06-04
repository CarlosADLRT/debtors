import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLoadDebtors } from '../../Redux/Actions/ActionsCreators';
import DebtorRow from './DebtorRow';

const DebtorTable = props => {
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
                  <th>Intereses actuales</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {props.debts.map(i => (
                  <DebtorRow key={i._KEY} row={i} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
