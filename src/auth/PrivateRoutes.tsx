import { ReactNode } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './firebase.config';
import Loader from '@/components/ui/Loader';

interface PrivateRoutesProps {
    children: ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loader />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoutes;