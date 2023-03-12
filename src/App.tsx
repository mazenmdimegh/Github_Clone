import './App.css';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/profile';
import NotFound from './components/NotFound';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>

          <Route path="/" element={<Home/> } />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/NotFound" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
