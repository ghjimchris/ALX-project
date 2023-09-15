import React from 'react'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter, 
  // useRoutes, BrowserRouter 
} from 'react-router-dom';
// import router from './router/index';
// import { router } from './router/routes.js';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';

import Main from './pages/Main';
import ContactForm from './pages/Contact';
// import ERROR404 from './pages/Error404';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Feature from './pages/Feature';
// import AddRecord from './pages/AddRecord';
import AddPatient from './pages/AddPatient';
import ViewRecords from './pages/ViewRecords';
import NavbarGuard from './pages/guard/NavbarGuard';
// import AuthGuard from './pages/guard/AuthGuard';
// import { PATH_AFTER_LOGIN } from '.pages/guard/pages';
// import App from './App';

const WithNavbar = (Component) => {
  // const token = window.localStorage.getItem('token');
  // const good = isValidToken(token);
  
  return (
    <>
      <NavbarGuard/>
      { Component }
    </>
  )
}

const routes = [
    {
        path: '/',
        element: WithNavbar(<Main/>),
    },
    {
        path: '/home',
        element: WithNavbar(<Main/>),
    },
    {
        path: '/contact',
        element: WithNavbar(<ContactForm/>),
        layout: 'blank',
    },
    {
        path: '/feature',
        element: WithNavbar(<Feature/>),
        layout: 'blank',
    },
    {
        path: '/auth/signin',
        element: WithNavbar(<Login />),
        layout: 'blank',
    },
    {
        path: '/auth/signup',
        element: WithNavbar(<Register/>),
        layout: 'blank',
    },
    {
        path: '/auth/login',
        element: WithNavbar(<Login />),
        layout: 'blank',
    },
    {
        path: '/auth/register',
        element: WithNavbar(<Register/>),
        layout: 'blank',
    },
    {
        path: '/login',
        element: WithNavbar(<Login />),
        layout: 'blank',
    },
    {
        path: '/register',
        element: WithNavbar(<Register/>),
        layout: 'blank',
    },
    {
        path: '/about',
        element: WithNavbar(<About/>),
        layout: 'blank',
    },
    {
        path: '/contact',
        element: WithNavbar(<ContactForm/>),
        layout: 'blank',
    },
    // {
    //     path: '/record/add',
    //     element: WithNavbar(<AddRecord/>),
    //     layout: 'blank',
    // },
    {
        path: '/record/add',
        element: WithNavbar(<AddPatient/>),
        layout: 'blank',
    },
    {
        path: '/record/view',
        element: WithNavbar(<ViewRecords/>),
        layout: 'blank',
    },
    // {
    //     path: '*',
    //     element: WithNavbar(<ERROR404/>),
    //     layout: 'blank'
    // },
];

// const ROUTER = useRoutes(routes);

const router = createBrowserRouter(routes);

const container = document.getElementById('root');

// Create a root using createRoot
const root = ReactDOM.createRoot(container);


root.render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
)


// root.render(
//   <React.StrictMode>
//     <Suspense>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <RouterProvider router={router} />
//         </PersistGate>
//       </Provider>
//     </Suspense>
//   </React.StrictMode>
// )


// root.render(
//   <React.StrictMode>
//     <Suspense>
//       <Provider store={store}>
//         <RouterProvider router={router} />
//       </Provider>
//     </Suspense>
//   </React.StrictMode>
// )
