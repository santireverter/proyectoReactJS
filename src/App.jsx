import logo from '../src/components/Logo/Enzo.png';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardListContainer from './components/Containers/CardListContainer';
import CardDetailContainer from './components/Containers/CardDetailContainer';

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
                <Route path='/' element= { <CardListContainer />} />
                <Route path='/:categoriaId' element= { <CardListContainer />} />
                <Route path={`/:categoriaId/:productoDetails`} element= { <CardDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
