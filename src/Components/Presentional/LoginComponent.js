import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';

class LoginComponent extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <Fragment>
        <h1>Login</h1>
        <Formik
          initialValues={{ login: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.login) {
              errors.login = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              onSubmit(values, setSubmitting);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="login"
                  placeholder="Ingresa Usuario"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                />
                {errors.login && touched.login && (
                  <small id="emailHelp" className="form-text text-muted">
                    {errors.login}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <small id="emailHelp" className="form-text text-muted">
                    {errors.password}
                  </small>
                )}
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Fragment>
    );
  }
}

export default LoginComponent;
