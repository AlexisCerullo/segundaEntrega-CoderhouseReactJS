import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path= '/' element = {<ItemListContainer mensaje='Bienvenido a Tienda Tech!' />} />
        <Route path= '/category/:type' element = {<ItemListContainer mensaje='Categoria: ' />} />
        <Route path= '/item/:id' element = {<ItemDetailContainer />} />
        <Route path= '*' element= {<Error />} />
      </Routes>
      
     
    </BrowserRouter>
  )
}

export default App
