import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Shop from './Components/Shop/Shop';
import ViewProudct from './Components/ViewProudct/ViewProudct';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './context/cartContext';


function App() {
  return (
    <>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path='shop' element={<Shop />} />
          <Route path='/viewproduct' element={<ViewProudct />} >
            <Route path=':id' element={<ViewProudct />} />
          </Route>
          <Route path='cart' element={<Cart />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
