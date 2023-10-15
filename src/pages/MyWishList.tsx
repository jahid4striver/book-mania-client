import auth from '@/auth/firebase.config';
import Loader from '@/components/ui/Loader';
import WishListCard from '@/components/ui/WishListCard';
import { IBook } from '@/interfaces/bookInterface';
import { useGetWishlistQuery } from '@/redux/features/books/bookApi';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyWishList = () => {
const [user]=useAuthState(auth)
const {data, isLoading}=useGetWishlistQuery(undefined);
const wishlist=data?.data.filter((wl:IBook)=>wl.user===user?.email)

if(isLoading){
    return <Loader/>
}
    return (
        <div>
            <h1 className="text-xl text-center my-4">My Wishlist</h1>
            <WishListCard wishlist={wishlist}/>
        </div>
    );
};

export default MyWishList;