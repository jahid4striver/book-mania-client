import MainLayout from './layout/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='container w-10/12 mx-auto'>
      <MainLayout />
      <ToastContainer />
    </div>
  )
}

export default App
