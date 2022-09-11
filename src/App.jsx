import logo from '../src/components/Logo/Enzo.png';
import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import ItemListContainer from './components/Containers/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

<link rel="stylesheet" href="./style/estilo.css" />

const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <header className='App-header'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Bienvenido a Ebano y Marfil</h1>
                    <h2>Aqui podras ver proximamente todos nuestros Productos</h2>
                </header>
            </div>
            <Routes>
                <Route path='/' element= { <ItemListContainer />} />
                <Route path='/:productoId' element= { <ItemListContainer />} />
                <Route path={`/:productoId/:productoDetails`} element= { <ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
