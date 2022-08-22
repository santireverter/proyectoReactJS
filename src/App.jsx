import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title/title';
<link rel="stylesheet" href="./style/estilo.css" />

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Title msj="hola a todos" color='red' />
                <a
                    className="App-link"    
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
