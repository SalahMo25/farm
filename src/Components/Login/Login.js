import { useState } from 'react';
import login from '../Images/signup.jpg';
import './Login.css';
import { Link } from 'react-router-dom';


function Login(){
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
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
        <section className='login'>
        <div className='container '>
    <div className='row'>
    <div className='col-md-12 col-lg-6 image'>
      <div>
        <img src={login} alt="image2"/>
      </div>
    </div>
    <div className='col-md-12 col-lg-6'>
    <form onSubmit={submit}>
    <h3 className='title'>Log In</h3>
  <div className="mb-3">
    <input type="email" placeholder='Email address'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type={password?"text":"password"} placeholder='Password' className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <div className='show'>
      {
        (password === false)? <i class="fa-regular fa-eye-slash" onClick={handleShow}></i>:<i class="fa-regular fa-eye" onClick={handleShow}></i>
      }
    </div>
    {password.length < 8 && accept && (
        <p className='erorr'>Password must be more than 8 char</p>
    )}
  </div>
  <button type="submit" className="btn  loginbtn">Log In</button>
  <br/>
  <button className='signupbtn'>Dont have an account?<Link to="/signup" className='link1'> Sign Up</Link></button>
</form>
    </div>
    </div>
    </div>
        </section>
        
        </>
    )
}
export default Login;