import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default class SidebarComponent extends Component {
  state = {
    toggled: ''
  };
  toggle = () => {
    this.setState(prev => ({ toggled: prev.toggled.length ? '' : 'toggled' }));
  };
  render() {
    return (
      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
          this.state.toggled
        }`}
        id='accordionSidebar'
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className='sidebar-brand d-flex align-items-center justify-content-center'
          href='index.html'
        >
          <div className='sidebar-brand-icon rotate-n-15'>
            <i className='fas fa-laugh-wink' />
          </div>
          <div className='sidebar-brand-text mx-3'>Prestamo Manuel</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className='sidebar-divider my-0' />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className='nav-item'>
          <NavLink exact className='nav-link nav-item' to='dashboard'>
            <i className='fas fa-fw fa-tachometer-alt' />
            <span>Dashboard</span>
          </NavLink>
        </li>

        {/* <!-- Divider --> */}
        <hr className='sidebar-divider d-none d-md-block' />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className='text-center d-none d-md-inline'>
          <button
            onClick={this.toggle}
            className='rounded-circle border-0'
            id='sidebarToggle'
          >
            <FontAwesomeIcon icon={faArrowLeft} className='text-white' />
          </button>
        </div>
      </ul>
    );
  }
}
