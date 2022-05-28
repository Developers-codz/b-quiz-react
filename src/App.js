import { Navbar,Footer } from './components';
import { Landing ,Rules} from './pages';
import './App.css';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
