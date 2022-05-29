import { Navbar,Footer,RequireAuth,RestrictRoute } from './components';
import { Landing ,Rules,Signup,Login} from './pages';
import './App.css';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route  element={<RequireAuth />}>

        <Route path="/rules" element={<Rules />} />
        </Route>
        <Route element={<RestrictRoute />}>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
