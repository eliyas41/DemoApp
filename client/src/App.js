import './App.css';
//import react router
import { Routes, Route } from "react-router"
//import the page components
import Home from './pages/Home';
import AddEmploye from './pages/AddEmploye';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/add-Employee/*" element={<AddEmploye />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
