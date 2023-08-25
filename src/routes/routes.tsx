import App from '@/App'
import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import AllBooks from '@/pages/AllBooks';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:'allbooks',
                element:<AllBooks/>
            }
        ]
    }
]);

export default routes;