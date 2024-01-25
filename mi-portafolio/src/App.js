import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile.js'

function App() {
  return (
    <div className="main">
      <h1>Hola Portafolio</h1>
      <div className='Profile'>
        <Profile />
        <p>Mi Perfil</p>

      </div>
    </div>
  );
}

export default App;
