import { IBook } from "@/interfaces/bookInterface";
import { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";

const WishListCard = ({ wishlist }: any) => {
  const [updateWishList, setUpdateWishList] = useState<IBook | null>(null);
  const [myWishList, setMyWishList] = useState([]);
  const [currentStatus, setCurrentStatus] = useState("");

  useEffect(() => {
    if (currentStatus === "Currently Reading") {
      const filtered = wishlist?.filter(
        (wl: IBook) => wl.status === "Currently Reading"
      );
      setMyWishList(filtered);
    } else if (currentStatus === "Plan To Read") {
      const filtered = wishlist?.filter(
        (wl: IBook) => wl.status === "Plan To Read" || !wl.status
      );
      setMyWishList(filtered);
    }else if (currentStatus === "All"){
      setMyWishList(wishlist);
    }else if (currentStatus === ""){
      setMyWishList(wishlist);
    }


  }, [currentStatus,wishlist]);

  return (
    <>
      <div className="text-center my-8">
        <div className="btn-group">
          <input
            onClick={() => setCurrentStatus("All")}
            type="radio"
            name="options"
            data-title="All"
            className="btn btn-sm btn-warning"
          />
          <input
            onClick={() => setCurrentStatus("Plan To Read")}
            type="radio"
            name="options"
            data-title="Plan To Read"
            className="btn btn-sm btn-warning ml-px"
          />
          <input
            onClick={() => setCurrentStatus("Currently Reading")}
            type="radio"
            name="options"
            data-title="Currently Reading"
            className="btn btn-sm btn-warning ml-px"
          />
        </div>
      </div>
      <div className="overflow-x-auto mb-8">
        <table className="table">
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publication Date</th>
              <th>Genre</th>
              <th>Reading Status</th>
            </tr>
          </thead>
          <tbody>
            {myWishList?.map((book: IBook) => (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="">
                      <div className=" w-20 h-28">
                        <img src={book?.image} alt={book?.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{book?.title}</td>
                <td>{book?.author}</td>
                <td>{book?.publication_date}</td>
                <td>{book?.genre}</td>
                <td>
                  {book?.status ? (
                    <button
                      className={`btn btn-sm text-white ${
                        book?.status === "Currently Reading"
                          ? "btn-info"
                          : book?.status === "Finished Reading"
                          ? "btn-success"
                          : "btn-primary"
                      }`}
                    >
                      {book?.status}
                    </button>
                  ) : (
                    <button className="btn btn-sm btn-primary text-white">
                      Plan To Read
                    </button>
                  )}
                  <br />
                  <label
                    onClick={() => setUpdateWishList(book)}
                    htmlFor="my_modal_6"
                    className="btn btn-xs btn-error text-white mt-2"
                  >
                    Change
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {updateWishList && (
          <UpdateModal
            setUpdateWishList={setUpdateWishList}
            updateWishList={updateWishList}
          ></UpdateModal>
        )}
      </div>
    </>
  );
};

export default WishListCard;
