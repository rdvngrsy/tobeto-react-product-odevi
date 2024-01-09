import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import AddProduct from './pages/AddProduct/AddProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/product-detail/:id' element={<ProductDetail/>}></Route>
          <Route path='/add-product' element={<AddProduct/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
