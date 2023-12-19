// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Classes from './pages/Classes/Classes';
// import ClassDetails from './pages/Classes/ClassDetails';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/main.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/classes" element={<Classes />} />
  {/* <Route path="/classes/details" element={<ClassDetails />} /> */}
  <Route path="/contact" element={<Contact />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
</Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
