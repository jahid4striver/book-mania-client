import App from '@/App'
import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import AllBooks from '@/pages/AllBooks';
import SignUp from '@/pages/SignUp';
import Login from '@/pages/Login';
import PrivateRoutes from '@/auth/PrivateRoutes';
import AddNewBook from '@/pages/AddNewBook';
import BookDetails from '@/pages/BookDetails';
import EditBook from '@/pages/EditBook';
import MyWishList from '@/pages/MyWishList';

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
                path: 'bookdetails/:id',
                element: <BookDetails />
            },
            {
                path: 'edit/:id',
                element: <EditBook />
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
            },
            {
                path: 'wishlist',
                element: <PrivateRoutes>
                    <MyWishList />
                </PrivateRoutes>
            }
        ]
    }
]);

export default routes;