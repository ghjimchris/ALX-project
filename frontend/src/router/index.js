import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

import BlankLayout from '../components/Layouts/BlankLayout';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import AuthLayout from '../components/Layouts/AuthLayout';

// const finalRoutes = routes.map((route) => {
//     return {
//         ...route,
//         element: route.layout === 'blank' ? 
//         <BlankLayout>{route.element}</BlankLayout> : 
//         <DefaultLayout>{route.element}</DefaultLayout>,
//     };
// });

// const router = createBrowserRouter(finalRoutes);

const router = createBrowserRouter(routes);

export default router;
