import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
// hooks
// pages
import Navbar from '../../components/Navbar';
import { AuthNavbar } from '../../components';
import { isValidToken } from '../../utils/jwt';

// import { PATH_AUTH } from '../routes/paths';
// import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

NavbarGuard.propTypes = {
  children: PropTypes.node,
};

export default function NavbarGuard() {
  const data = useSelector(state => state.User.data);

  let token = window.localStorage.getItem('token');

  if (data === null || token === null || typeof(data) == "undefined") {
    return <Navbar />
  }

  if (token !== "" || token !== null || typeof(token) !== "undefined" || token.length > 20) {
    token = token.replace("Bearer ", '');
  }

  const { userId, role, allow_login, email, phone } = data;

  if (!allow_login || !email || !role || !userId || !phone) {
    return <Navbar />;
  }

  if (!isValidToken(token)) {
    return <Navbar />;
  }

  return <AuthNavbar/>;
}
