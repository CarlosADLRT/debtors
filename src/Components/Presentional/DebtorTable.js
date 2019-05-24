import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLoadDebtors } from '../../Redux/Actions/ActionsCreators';
import { format } from 'date-fns';
import AddNewPay from '../Modals/AddNewPay';
import { moneyFormatter } from '../../Utils/Utils';

class DebtorTable extends Component {
  state = {
    modal: false
  };
  componentDidMount() {
    this.props.requestLoadDebtors();
  }

  toggle = debt => {
    this.setState(prev => ({ ...prev, modal: !prev.modal, debt }));
  };

  render() {
    return (
      <Fragment>
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Deudores</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
              >
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
                  {this.props.debts.map(i => (
                    <tr key={i._KEY}>
                      <td>{i.debtor}</td>
                      <td>{format(i.start, 'DD/MM/YYYY')}</td>
                      <td>{i.tax * 100}%</td>
                      <td>{moneyFormatter(i.debt)}</td>
                      <td>
                        <button
                          onClick={() => this.toggle(i._KEY)}
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
        {this.state.modal && (
          <AddNewPay
            debt={this.state.debt}
            open={this.state.modal}
            toggle={this.toggle}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ DebtsReducer }) => {
  console.log(DebtsReducer);
  return { ...DebtsReducer };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestLoadDebtors }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DebtorTable);
