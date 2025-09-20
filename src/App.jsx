import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path= '/' element = {<ItemListContainer mensaje='Bienvenido a Tienda Tech!' />} />
        <Route path= '/item' element = {<ItemDetailContainer />} />
      </Routes>
      
     
    </BrowserRouter>
  )
}

export default App
