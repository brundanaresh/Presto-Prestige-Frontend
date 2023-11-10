import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PasswordReset from './components/PasswordReset';
import PasswordResetPage from './components/PasswordResetPage';
import Footer from './components/Footer';
import BlogPost0 from './components/BlogPost0';
import BlogPost1 from './components/BlogPost1';
import BlogPost2 from './components/BlogPost2';
import BlogPost3 from './components/BlogPost3';
import BlogPost4 from './components/BlogPost4';
import BlogPost5 from './components/BlogPost5';




function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/subscribe" element={<Subscribe  />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<PasswordReset />} />
        <Route path="/passwordreset" element={<PasswordResetPage />} />
        <Route path="/passwordresetpage" element={<PasswordResetPage />} />
        <Route path="/blogpage0" element={<BlogPost0 />} />
        <Route path="/blogpage1" element={<BlogPost1 />} />
        <Route path="/blogpage2" element={<BlogPost2 />} />
        <Route path="/blogpage3" element={<BlogPost3 />} />
        <Route path="/blogpage4" element={<BlogPost4 />} />
        <Route path="/blogpage5" element={<BlogPost5 />} />
        <Route path="/blog/:id" component={Blog} />
</Routes>
      <Footer />
    </Router>
  );
}

export default App;
