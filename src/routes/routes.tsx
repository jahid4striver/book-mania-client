import App from '@/App'
import { createBrowserRouter } from 'react-router-dom'
import Home from '@/components/Home';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    }
]);

export default routes;