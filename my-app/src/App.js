
import './App.css';
import Navbar from './componants/Navbar';
import Sidebar from './componants/Sidebar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2  sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path='/' element={<Home />} />
              <Route path='products' element={<Products />} />
              <Route path='products/add' element={<AddProduct/>} />
              <Route path='products/:productId' element={<ProductDetails/>} />
          </Routes>

    </div>
    </div>
    </div>
  );
}

export default App;
