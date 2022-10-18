import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardListContainer from './components/Containers/CardListContainer';
import CardDetailContainer from './components/Containers/CardDetailContainer';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
import CompraCarrito from './components/CompraCarrito';


<link rel="stylesheet" href="./style/estilo.css" />

const App = () => {
    return (
        <BrowserRouter>
        <CartProvider>
            <div className="App">
                <Navbar />
            </div>
            <Routes>
                <Route path='/' element= { <CardListContainer />} />
                <Route path='/:categoriaId' element= { <CardListContainer />} />
                <Route path='/:categoriaId/:productoDetails' element= { <CardDetailContainer />} />
                <Route path='/cart' element= {<Carrito />}></Route>
                <Route path='/carritoCheckout' element={<CompraCarrito />}></Route>
            </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
