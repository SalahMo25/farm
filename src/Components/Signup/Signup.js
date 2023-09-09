import { useState } from 'react';
import signup from '../Images/signup.jpg';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup(){
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[password,setPassword] = useState(false);
    const[accept,setAccept] = useState(false);
    const handleShow=()=>{
      setPassword(!password)
    }
    function submit(e){
        e.preventDefault();
        setAccept(true)
    }
    console.log(password);
    return(
        <>
        <section className='signup'>
        <div className='container '>
    <div className='row'>
    <div className='col-md-6 col-lg-6 image'>
        <img src={signup} alt="image2"/>
    </div>
    <div className='col-md-6 col-lg-6'>
    <form onSubmit={submit}>
    <h3 className='title'>Sign Up</h3>
    <div className="mb-3">
    <input type="text" placeholder='Full Name' className="form-control" id="FullName" value={name} onChange={(e) => setName(e.target.value)}/>
    {name === "" && accept && <p className='erorr'>Username is Required</p>}
  </div>
  <div className="mb-3">
    <input type="email" placeholder='Email address' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for='phone'></label>
  <input input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Phone Number' className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type={password?"text":"password"} placeholder='Password' className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <div className='show'>
      {
        (password === false)? <i class="fa-regular fa-eye-slash" onClick={handleShow}></i>:<i class="fa-regular fa-eye" onClick={handleShow}></i>
      }
    </div>
    {/* <label className='show' onClick={handleShow}>{password?"Hide":"Show"}</label> */}
    {password.length < 8 && accept && (
        <p className='erorr'>Password must be more than 8 char</p>
    )}
  </div>
  <button type="submit" className="btn signupbtn">Sign Up</button>
  <div className="mb-3 form-check checkk">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">I agree the Terms of Service and Privacy Policy</label>
  </div>
  <button className='loginbtn'>Already have an account?<Link to="/login" className='link1'> Log In</Link></button>
</form>    
    </div>
    </div>
    </div>
        </section>
        </>
    )
}
export default Signup;