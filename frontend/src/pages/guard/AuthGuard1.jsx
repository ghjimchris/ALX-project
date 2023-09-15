import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Error503 from '../Error503'
// hooks
// pages
import Login from '../Login';

// import { isValidToken } from '../../utils/jwt';
// import { PATH_AUTH } from '../routes/paths';
// import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

const AUTH_PATHS = [
    '/record/add','/record/view'
]

export default function AuthGuard1({ children }) {
  console.log({ AuthGuardChildren: children })
  // const data = useSelector(state => state.User.data);
  // const { pathname } = useLocation();
  // const navigate = useNavigate();

  // let token = window.localStorage.getItem('token');

  // const Anointed = AUTH_PATHS.find(x => x === pathname);

  // if(Anointed){
  //   return navigate(-1);
  // }

  // const [requestedLocation, setRequestedLocation] = useState(null);


  // if (data === null || token === null || typeof(data) == "undefined") {
  //   return <Login />
  // }

  // if (!isValidToken(token)) {
  //   return <Login />;
  // }

  // const { userId, role, allow_login, email, phone } = data;

  // if (!email || !role || !userId || !phone) {
  //   return <Login />;
  // }

  // if (!allow_login) {
  //   if (pathname !== requestedLocation) {
  //     setRequestedLocation(pathname);
  //   }
  //   return <Error503 />;
  // }

  
  // if (requestedLocation && pathname !== requestedLocation) {
  //   setRequestedLocation(null);
  //   return <Navigate to={requestedLocation} />;
  // }

  return <>{children}</>;
}
