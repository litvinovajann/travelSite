import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Home> </Home>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
