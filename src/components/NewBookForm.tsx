import { IBook } from '@/interfaces/bookInterface';
import { useState } from 'react';
import { toast } from 'react-toastify';

const NewBookForm = () => {
    const [id, setId] = useState('');

    function guardarArchivo(e: React.ChangeEvent<HTMLInputElement>) {
        var file = e.target.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(e.target.files[0]) //start conversion...
        reader.onload = function (e) { //.. once finished..
            var rawLog = (reader.result as string)?.split(',')[1];
            var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            fetch('https://script.google.com/macros/s/AKfycbwYKgy85mYgpiT7U3mV2T6vum0yKg_I-AAJegLuNfeosEO_HligOW_ic_M1mW8pUqk/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    if (a.id) {
                        toast.success("Image Uploaded")
                        setId(a.id)

                    }
                }).catch(e => console.log(e)) // Or Error in console
        }
    }


    const handleAddBook = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = e.target.title.value;
        const author = e.target.author.value;
        const genre = e.target.genre.value;
        const publication_date = e.target.publication_date.value;

        const image = `https://docs.google.com/uc?export=download&id=${id}`;
        const bookData:IBook = { title, author, genre, publication_date, image };


        fetch('https://madrumi.clearsoftwares.xyz/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)

        })
            .then(res => res.json())
            .then(data => {
                toast.success("Book Added Successful");
                console.log(data);
                e.target.reset();
            })
    }


    return (
        <div>
            <form onSubmit={handleAddBook} className='mt-8 flex justify-center items-center flex-col'>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Book Title</span>
                    </label>
                    <input name='title' type="text" placeholder="Type Book Title" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Book Author</span>
                    </label>
                    <input name='author' type="text" placeholder="Type Book Author Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Genre</span>
                    </label>
                    <input name='genre' type="text" placeholder="Type Book Genre" className="input input-bordered w-full max-w-xs" />
                </div><div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Publication Date</span>
                    </label>
                    <input name='publication_date' type="text" placeholder="Publication Date As yyyy-mm-dd" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Book Cover Image</span>
                    </label>
                    <input type="file" id="customFile" placeholder="Image File" onChange={(e) => guardarArchivo(e)} />
                </div>
                <button disabled={!id} className='btn btn-md btn-accent text-white my-4 rounded-md' type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default NewBookForm;