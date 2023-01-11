
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Navigation from './components/Navigation';
import Contact from './pages/body/Contact';
function App() {
  return (
    <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Login />} />
                    
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup/>} />
                            <Route path="/contact" element={<Contact/>} />
                      
                    {/* <Route path="/chat" element={<Chat />} /> */}
                </Routes>
            </BrowserRouter>
  );
}

export default App;
