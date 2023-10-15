import ReactDOM from 'react-dom'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { Provider } from 'react-redux'
import store from './redux/store'
import * as React from 'react'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);


