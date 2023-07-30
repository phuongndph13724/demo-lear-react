import logo from './logo.svg';
import './App.css';
import HomePage from './contaillers/home-pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './contaillers/product-pages/ProductPage';
import Login from './contaillers/auths/Login';
import ProductDetail from './contaillers/product-pages/ProductDetail';
import ProductForm from './contaillers/product-pages/ProductForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>} />
            <Route path='product'>
              <Route index element={<ProductPage/>} />
              <Route path=':id' element={<ProductDetail/>} />
              <Route path='edit/:id' element={<ProductForm/>} />
              <Route path='add' element={<ProductForm/>} />
            </Route>
          </Route>
          <Route path='/auth/'>
            <Route path='login' element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
