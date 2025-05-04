import logo from './logo.svg';
import { BrowserRouter,
  Routes,
  Route, } from 'react-router-dom'
import './App.css';
import Home from './Home'
import CAP from './CAP'
import Seconde from './Seconde'
import Premiere from './Premiere'
import Terminale from './Terminale'

//if blank page try browserRouter

function App() {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
		<Route path="/CAP" index element={<CAP />} />
		<Route path="/Seconde" index element={<Seconde />} />
		<Route path="/Premiere" index element={<Premiere />} />
		<Route path="/Terminale" index element={<Terminale />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
