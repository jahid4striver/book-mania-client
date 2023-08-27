import { useEffect,useRef } from 'react';
import { useLocation } from 'react-router-dom';

function usePreviousLocation() {
    const location = useLocation();
    const prevLocationRef:any = useRef(null);

    useEffect(() => {
        prevLocationRef.current = location;
    }, [location]);

    return prevLocationRef.current;
}

export default usePreviousLocation;

