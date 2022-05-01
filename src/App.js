import './styles.css';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <div className="font-serif">
      {/* <BrowserRouter> */}
       <Header />
       <Home />
    </div>
  );
}

export default App;
