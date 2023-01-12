import { Route, Routes } from 'react-router';
import './App.css';
import AddProduct from './components/AddProduct';
import Favorite from './components/Favorite';
import Header from './components/Header';
import Product from './components/Product';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Product/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
   

  </Routes>
 
    </>
  );
}

export default App;
