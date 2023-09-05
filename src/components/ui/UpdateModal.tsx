import { IBook } from '@/interfaces/bookInterface';
import { useUpdateWishlistMutation } from '@/redux/features/books/bookApi';
import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface UpdateModalProps {
    setUpdateWishList: React.Dispatch<React.SetStateAction<IBook | null>>;
    updateWishList: IBook;
  }

const UpdateModal: React.FC<UpdateModalProps> = ({ setUpdateWishList,updateWishList}) => {
    const [status, setStatus] = useState("");
    const [updateWishlist, { isSuccess,isError }] = useUpdateWishlistMutation();
    const [showSuccessToast, setShowSuccessToast] = useState(false);
      const [showErrorToast, setShowErrorToast] = useState(false);
  
      useEffect(() => {
          if (isSuccess) {
              setShowSuccessToast(true);
          }
      }, [isSuccess]);
  
      useEffect(() => {
          if (isError) {
              setShowErrorToast(true);
          }
      }, [isError]);
  
    const handleUpdateStatusForBook = (mybook: IBook) => {
      const data = { status:status };
      updateWishlist({ id: mybook._id, data: data });
      setUpdateWishList(null);
    };
  
    useEffect(() => {
      if (showSuccessToast) {
          toast.success('Status Updated');
          setShowSuccessToast(false);
      }
  }, [showSuccessToast]);
  
  useEffect(() => {
      if (showErrorToast) {
          toast.error('Status Update Failed');
          setShowErrorToast(false);
      }
  }, [showErrorToast]);
    return (
        <div>
             <input
                    type="checkbox"
                    id="my_modal_6"
                    className="modal-toggle"
                  />
              <div className="modal">
             
                    <div className="modal-box flex flex-col g-2">
                    <span className='text-right ml-32'><button onClick={()=>setUpdateWishList(null)} className='btn btn-xs btn-error text-white'>X</button></span>
                      <h3 className="text-md font-bold">
                        Change Status of: {updateWishList?.title}
                      </h3>
                      <div className="form-control w-40  max-w-xs mx-auto">
                        <label className="label">
                          <span className="label-text">Select Status</span>
                        </label>
                        <select
                          onChange={(e) => setStatus(e.target.value)}
                          className="text-left text-xs rounded-lg text-black select select-bordered select-error w-full max-w-xs"
                          required
                        >
                          <option disabled selected>
                            Select Status
                          </option>
                          <option value="Currently Reading">
                            Currently Reading
                          </option>
                          <option value="Plan To Read">Plan To Read</option>
                          <option value="Finished Reading">
                            Finished Reading
                          </option>
                        </select>
                      </div>
                      <label onClick={() => handleUpdateStatusForBook(updateWishList)}
                        htmlFor="my_modal_6" className="btn btn-sm btn-error text-white w-28 mt-2 mx-auto">
                        Change
                      </label>
                    </div>
                  </div>
        </div>
    );
};

export default UpdateModal;