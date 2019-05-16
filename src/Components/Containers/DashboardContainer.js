import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsCreators from '../../Redux/Actions/ActionsCreators';
import DashboardComponent from '../Presentional/DashboardComponent';

class DashboardContainer extends Component {
  componentDidMount() {
    //this.props.onLoadDebtors();
  }

  render() {
    return <DashboardComponent />;
  }
}

const mapStateToProps = ({ DebtsReducer }) => {
  return { loading: DebtsReducer.loading };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { onLoadDebtors: ActionsCreators.requestLoadDebtors },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
