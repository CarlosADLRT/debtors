import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default function withGuardValidate(WrappedComponent) {
  class HOCComponent extends Component {
    render() {
      if (this.props.token) {
        return <WrappedComponent />
      }
      return <Redirect to='/' />
    }
  }

  const mapStateToProps = state => ({
    token: state.AuthReducer.token
  })

  return connect(mapStateToProps)(HOCComponent)
}
