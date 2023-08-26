import App from '@/App'
import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import AllBooks from '@/pages/AllBooks';
import SignUp from '@/pages/SignUp';
import Login from '@/pages/Login';
import PrivateRoutes from '@/auth/PrivateRoutes';
import AddNewBook from '@/pages/AddNewBook';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'allbooks',
                element: <AllBooks />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'addnewbook',
                element: <PrivateRoutes>
                    <AddNewBook />
                </PrivateRoutes>
            }
        ]
    }
]);

export default routes;