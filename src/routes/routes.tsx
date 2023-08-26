import App from '@/App'
import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import AllBooks from '@/pages/AllBooks';
import SignUp from '@/pages/SignUp';

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
            },
            {
                path:'signup',
                element:<SignUp/>
            },
        ]
    }
]);

export default routes;