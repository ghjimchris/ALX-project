import { createBrowserRouter, useRoutes } from 'react-router-dom';
import { lazy } from 'react';
import NavbarGuard from '../pages/guard/NavbarGuard';
import AuthGuard from '../pages/guard/AuthGuard1';



const Main = lazy(() => import('../pages/Main'));
const ContactForm = lazy(() => import('../pages/Contact'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const About = lazy(() => import('../pages/About'));
const Feature = lazy(() => import('../pages/Feature'));
const AddRecord = lazy(() => import('../pages/AddRecord'));
const ViewRecords = lazy(() => import('../pages/ViewRecords'));

const WithNavbar = (Component) => {
    return (
      <>
        <NavbarGuard/>
          <AuthGuard>
          { Component }
          </AuthGuard>
      </>
    )
};


//  { Component }
//  <Component />


// import Main from '../pages/Main';
// import ContactForm from '../pages/Contact';
// import ERROR404 from '../pages/Error404';
// import ERROR500 from '../pages/Error500';
// import ERROR503 from '../pages/Error503';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import About from '../pages/About';
// import Feature from '../pages/Feature';
// import AddRecord from '../pages/AddRecord';
// import ViewRecords from '../pages/ViewRecords';

// const routes = [
//     {
//         path: '/',
//         element: <Main/>,
//     },
//     {
//         path: '/home',
//         element: <Main/>,
//     },
//     {
//         path: '/contact',
//         element: <ContactForm/>,
//         layout: 'blank',
//     },
//     {
//         path: '/feature',
//         element: <Feature/>,
//         layout: 'blank',
//     },
//     {
//         path: '/error404',
//         element: <ERROR404/>,
//         layout: 'blank',
//     },
//     {
//         path: '/error500',
//         element: <ERROR500/>,
//         layout: 'blank',
//     },
//     {
//         path: '/error503',
//         element: <ERROR503/>,
//         layout: 'blank',
//     },
//     {
//         path: '/auth/signin',
//         element: <Login />,
//         layout: 'blank',
//     },
//     {
//         path: '/auth/signup',
//         element: <Register/>,
//         layout: 'blank',
//     },
//     {
//         path: '/about',
//         element: <About/>,
//         layout: 'blank',
//     },
//     {
//         path: '/contact',
//         element: <ContactForm/>,
//         layout: 'blank',
//     },
//     {
//         path: '/record/add',
//         element: <AddRecord/>,
//         layout: 'blank',
//     },
//     {
//         path: '/record/view',
//         element: <ViewRecords/>,
//         layout: 'blank',
//     },
//     {
//         path: '*',
//         element: <ERROR404/>,
//         layout: 'blank'
//     },
// ];

// const routes = [
//     {
//         path: '/',
//         element: WithNavbar(<Main/>),
//     },
//     {
//         path: '/home',
//         element: WithNavbar(<Main/>),
//     },
//     {
//         path: '/contact',
//         element: WithNavbar(<ContactForm/>),
//         layout: 'blank',
//     },
//     {
//         path: '/feature',
//         element: WithNavbar(<Feature/>),
//         layout: 'blank',
//     },
//     {
//         path: '/auth/signin',
//         element: WithNavbar(<Login />),
//         layout: 'blank',
//     },
//     {
//         path: '/auth/signup',
//         element: WithNavbar(<Register/>),
//         layout: 'blank',
//     },
//     {
//         path: '/about',
//         element: WithNavbar(<About/>),
//         layout: 'blank',
//     },
//     {
//         path: '/contact',
//         element: WithNavbar(<ContactForm/>),
//         layout: 'blank',
//     },
//     {
//         path: '/record/add',
//         element: WithNavbar(<AddRecord/>),
//         layout: 'blank',
//     },
//     {
//         path: '/record/view',
//         element: WithNavbar(<ViewRecords/>),
//         layout: 'blank',
//     },
// ];

const routes = useRoutes([
  {
      path: '/',
      element: WithNavbar(<Main/>),
      element: (
        <AuthGuard>
          <Main/>
        </AuthGuard>
      ),
      element: (
        <AuthGuard>
          <Main/>
        </AuthGuard>
      ),
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
]);

const router = createBrowserRouter(routes);

export { routes, router, navbarRoutes };
