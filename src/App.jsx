import logo from '../src/components/Logo/Enzo.png';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title/title';
import ItemListContainer from './components/ItemListContainer';
<link rel="stylesheet" href="./style/estilo.css" />

const App = () => {
    return (
        <div className="App" >
            <Navbar/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ItemListContainer></ItemListContainer>
            </header>
        </div>
    );
}

export default App;
