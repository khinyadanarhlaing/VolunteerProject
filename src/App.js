import './App.css';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
