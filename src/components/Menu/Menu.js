import React, { Component } from 'react';
import { Menu, MenuItem, Item, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const mapState = (state) => ({
  auth: state.auth
});

const actions = {
  logout
}

const MenuComponent = ({logout}) =>
  <Menu>
    <Link className="menu item" to="/">Home</Link>
    <Link className="menu item" to="/messages">Messages</Link>
    <Link className="menu item" to="/friends">Friends</Link>
    <Menu.Menu position="right">
      <MenuItem>
        <Input icon="search" type="text" placeholder="Search" />
      </MenuItem>
      <MenuItem onClick={() => logout()}>Logout</MenuItem>
    </Menu.Menu>
  </Menu>


export default connect(mapState,actions)(MenuComponent);