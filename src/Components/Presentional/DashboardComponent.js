import React, { Component, Fragment } from 'react';
import SidebarComponent from './SidebarComponent';
import Topbar from './Topbar';
import DebtorTable from './DebtorTable';
import { Route, Link, withRouter, Switch } from 'react-router-dom';
import AddNewDebt from './AddNewDebt';

class DashboardComponent extends Component {
  state = {
    visibleLeft: true
  };
  render() {
    const { match } = this.props;
    console.log('TCL: DashboardComponent -> render -> match', match);
    return (
      <Fragment>
        <div id='wrapper'>
          {/* <!-- Sidebar --> */}
          <SidebarComponent />
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id='content-wrapper' className='d-flex flex-column'>
            {/* <!-- Main Content --> */}
            <div id='content'>
              <Topbar />
              {/* <!-- Begin Page Content --> */}
              <div className='container-fluid'>
                {/* <!-- Page Heading --> */}
                <div className='d-flex align-items-center justify-content-end mb-4'>
                  {!match.path.includes('agregar_prestamo') ? (
                    <Link
                      to={match.path + '/agregar_prestamo'}
                      className='btn btn-primary'
                    >
                      Agregar Prestamo
                    </Link>
                  ) : (
                    <Link to={'/dashboard'} className='btn btn-primary'>
                      Regresar a la tabla
                    </Link>
                  )}
                </div>
                <Switch>
                  <Route
                    component={DebtorTable}
                    exact
                    path={match.path + '/'}
                  />
                  <Route
                    component={AddNewDebt}
                    path={match.path + '/agregar_prestamo'}
                  />
                </Switch>
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of  Main Content --> */}
          </div>
          {/* <!-- End of Content Wrapper --> */}
        </div>
        {/* <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button--> */}
        <a className='scroll-to-top rounded' href='#page-top'>
          <i className='fas fa-angle-up' />
        </a>
      </Fragment>
    );
  }
}

export default withRouter(DashboardComponent);
