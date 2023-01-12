import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './components/home.jsx';
import Signup from './components/signup.jsx';
import Signin from './components/signin.jsx';
import Profilemeet from './components/profilemeet.jsx';
import Profile from './components/profile.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home />} />
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/signin" element={<Signin/>}/>
   <Route path="/profilemeet" element={<Profilemeet/>}/>
   <Route path="/profile" element={<Profile/>}/>
   </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
