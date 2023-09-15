import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// hooks
// pages
import Login from '../Login';

import { AuthNavbar } from '../../components';
import { isValidToken } from '../../utils/jwt';
// import { PATH_AUTH } from '../routes/paths';
// import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

const AUTH_PATHS = [
    '/record/add','/record/view'
]

export default function AuthGuard({ children }) {
  const data = useSelector(state => state.User.data);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let token = window.localStorage.getItem('token');

  const Anointed = AUTH_PATHS.find(x => x === pathname);

  if(Anointed){
    return navigate(-1);
  }

  const [requestedLocation, setRequestedLocation] = useState(null);


  if (data === null || token === null || typeof(data) == "undefined") {
    return <Login />
  }

  if (!isValidToken(token)) {
    return <Login />;
  }

  const { userId, role, allow_login, email, phone } = data;

  if (!allow_login || !email || !role || !userId || !phone) {
    return <Login />;
  }

  if (data === null || typeof(data) == "undefined") {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  
  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

    return <>{children}</>;
    // return <Navigate to={requestedLocation} />;
}
