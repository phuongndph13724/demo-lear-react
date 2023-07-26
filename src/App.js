import logo from './logo.svg';
import './App.css';
import HomePage from './contaillers/home-pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './contaillers/product-pages/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>} />
            <Route path='product' element={<ProductPage/>} />
          </Route>
          <Route path='/auth/'>
            <Route index element={<HomePage/>} />
            <Route path='product' element={<ProductPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
