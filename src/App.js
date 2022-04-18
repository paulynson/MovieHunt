import './styles.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <div className="font-serif">
      <BrowserRouter>
       <Header />
        <Routes>
         <Route exact path="/" element={ <Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
