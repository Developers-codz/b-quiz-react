import { Navbar,Footer,RequireAuth,RestrictRoute } from './components';
import { Landing ,Rules,Signup,Login,Profile} from './pages';
import './App.css';
import {Routes,Route} from "react-router-dom"
import {ToastContainer,toast} from "react-toastify"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route  element={<RequireAuth />}>

        <Route path="/rules" element={<Rules />} />
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RestrictRoute />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
