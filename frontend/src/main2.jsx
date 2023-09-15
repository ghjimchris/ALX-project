import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import router from './router/index';

// import { Provider } from 'react-redux';
// import store from './store/index';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Suspense>
//       <Provider store={store}>
//         <RouterProvider router={router} />
//       </Provider>
//     </Suspense>
//   </React.StrictMode>
// )
