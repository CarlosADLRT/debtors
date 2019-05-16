import React, { Component } from 'react';
import LoginComponent from '../Presentional/LoginComponent';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as ActionsCreators from '../../Redux/Actions/ActionsCreators';

class LoginContainer extends Component {
  submit = (values, setSubmitting) => {
    this.props.onLogin(values, setSubmitting);
  };

  render() {
    if (this.props.token) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='card'>
          {this.props.token}
          <div className='card-body'>
            <LoginComponent onSubmit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ AuthReducer }) => {
  return { token: AuthReducer.token };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onLogin: ActionsCreators.initLogin }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
