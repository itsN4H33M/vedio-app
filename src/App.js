import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import History from './pages/History';
import Header from './Components/Header';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watch-history' element={<History />} />
      </Routes>
      <hr style={{border:'1px solid black'}}/>
      <Footer />
    </div>
  );
}

export default App;
