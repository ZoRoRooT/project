
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Journey from './pages/Journey';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Store from './pages/Store';

function App() {
  return (
  <div>
    <Provider store={store}>
    <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Login />} />
                    
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup/>} />
                            <Route path="/contact" element={<Contact/>} />
                            <Route path="/team" element={<Team/>} />
                            <Route path="/journey" element={<Journey/>} />
                            <Route path="/store" element={<Store/>} />
                      
                    
                </Routes>
            </BrowserRouter>
            </Provider>
            </div>
  );
}

export default App;
