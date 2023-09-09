import { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo_green from '../Images/logo_green.png';


function Footer() {
  const [email, setEmail] = useState('');
  return (
    <>
      <section className='footer'>
        <div className='container mt-4'>
          <div className='row'>
            <div className=" col-sm-6 col-md-6 col-lg-3">
              <div>
                <Link className="navbar-brand" to="/"><img src={logo_green} alt="logo" /></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend turpis lacus </p>
              </div>

            </div>
            <div className=" col-sm-6 col-md-6 col-lg-3">
              <div>
                <h3>Pages</h3>
              </div>
              <div>
                <h4><a href="#">Home</a></h4>
                <h4><a href="#">Shop</a></h4>
                <h4><a href="#">About</a></h4>
              </div>
            </div>
            <div className=" col-sm-6 col-md-6 col-lg-3">
              <div>
                <h3>Contact</h3>
                <h4><i class="fa-solid fa-phone"></i> +9123 465 789</h4>
                <h4><i class="fa-solid fa-envelope"></i> lorem123@gmail.com</h4>
                <h4><i class="fa-solid fa-location-dot"></i> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </h4>
              </div>
            </div>
            <div className=" col-sm-6 col-md-6 col-lg-3">
              <div>
                <h3>About Us</h3>
              </div>

              <p>You can contact Us to send email to us</p>
              <div className='subscribe'>
                <input type="email" placeholder="Enter e-mail here.." className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <button href="#" class="main-btn">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Footer;