import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsCreators from '../../Redux/Actions/ActionsCreators';

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.onLoadDebtors();
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = ({ AuthReducer }) => {
  return { token: AuthReducer.token };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onLoadDebtors: ActionsCreators.requestLoadDebtors }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
