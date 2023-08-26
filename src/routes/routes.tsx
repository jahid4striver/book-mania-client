import App from '@/App'
import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import AllBooks from '@/pages/AllBooks';
import SignUp from '@/pages/SignUp';
import Login from '@/pages/Login';

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
            {
                path:'login',
                element:<Login/>
            },
        ]
    }
]);

export default routes;