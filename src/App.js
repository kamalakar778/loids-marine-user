
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/Home';
import ApplicationPage from './pages/ApplicationPage/ApplicationPage';
import Signup from './pages/Signup/Signup';
import AboutUs from './components/AboutUs/AboutUs';
import Sample from "../src/pages/Sample/Sample";
import Verification from './pages/Signup/Verification';
import Success from './pages/Signup/Success';
import Profile from './pages/Profile/Profile';
import ApplyWith from './pages/Profile/ApplyWith/ApplyWith'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyApplication from './pages/Profile/MyApplication/MyApplication';
import SampleEffect from './pages/Sample/SampleEffect';

function App() {
  return (
    <>
    <Router>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<HomePage/> }/>
        <Route path='/SampleEffect' element={<SampleEffect/> }/>
        <Route path='/About-Us' element={<AboutUs/> }/>
        <Route path='/Sample' element={<Sample/> }/>

        {/* User Panel Routes */}
        <Route path='/Signup' element={<Signup/> }/>
        <Route path='/Verification' element={<Verification/> }/>
        <Route path='/Success' element={<Success/> }/>
        <Route path='/Profile' element={<Profile/> }/>
        <Route path='/ApplyWith' element={<ApplyWith/> }/>
        <Route path='/MyApplication' element={<MyApplication/> }/>
        <Route path='/applicationpage' element={<ApplicationPage/> }/>
        {/* <Route path='/my-admit-card' element={<MyAdmitCard/> }/>
        <Route path='/my-selection-letter' element={<selectionLetter/> }/>
        <Route path='/my-confirmation-letter' element={<ConfirmationLetter/> }/>
        <Route path='/my-results' element={<MyResults/> }/> */}
        <Route />
      </Routes>
      {/* <Footer/> */}
    </Router>
    <div className="App">
    </div>
    </>
  );
}

export default App;
