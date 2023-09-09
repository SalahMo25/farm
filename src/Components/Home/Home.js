import './Home.css';
import about from '../Images/about.jpg';
import apple from '../Images/apple.png';
import banana from '../Images/banana.png';
import tomato from '../Images/tomato.png';
import { Link } from 'react-router-dom';
function Home(){
    return(
        <>
         <section className="landing">
        <div className="overlay"></div>
            <div className="content">
                <h2>Smart Farming</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna sit adipiscing leo aliquam tempor. Rutrum<br/> eu commodo.</p>
            </div>
    </section>
    <section className='about'>
<div className='container '>
    <div className='row'>
<div className='col-sm-12 col-md-12 col-lg-6'>
    <h6><i class="fa-brands fa-pagelines"></i>ABOUT US</h6>
    <h2>An organic farm with <br/>a big mission behind</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque scelerisque interdum viverra justo, laoreet pellentesque.</p>
        <ul>
            <li><i class="fa-solid fa-circle-check"></i>100% Organic Products</li>
            <li><i class="fa-solid fa-circle-check"></i>Cruelty Free</li>
            <li><i class="fa-solid fa-circle-check"></i>Support Local Community</li>
        </ul>
    <Link to="/about"><button type="button" class=" btn-lg ">Learn More</button></Link>
</div>
<div className='col-sm-12 col-md-12 col-lg-6'>
    <img  src={about} alt="about"/>
</div>
</div>
</div>
</section>
<section className='farm'>
    <div className='row'>
    <div className='col-sm-12 col-md-12 col-lg-6 part1'>
        <div className='Box'>
        <div className='row'>
        <div className=' box col-sm-6 col-md-6 col-lg-6'>
        <i class="fa-solid fa-tree"></i>
        <h2>36+</h2>
        <h5>PRODUCTS</h5>
        </div>
        <div className=' box col-sm-6  col-md-6 col-lg-6'>
        <i class="fa-solid fa-wheat-awn-circle-exclamation"></i>
        <h2>20+</h2>
        <h5>YEARS OF EXPERIENCE</h5>
        </div>
        </div>
        </div>
        <div className='Box2'>
        <div className='row'>
        <div className=' box col-sm-6  col-md-6 col-lg-6'>
        <i class="fa-solid fa-circle-check"></i>
        <h2>2,850+</h2>
        <h5>SATISFIED CLIENTS</h5>
        </div>
        <div className='box  col-sm-6 col-md-6 col-lg-6'>
        <i class="fa-solid fa-user-group"></i>
        <h2>25</h2>
        <h5>LOCAL TEAM MEMBERS</h5>
        </div>
        </div>
        </div>
        </div>
<div className='col-sm-12 col-md-12 col-lg-6 part2'>
    <h6><i class="fa-brands fa-canadian-maple-leaf"></i>WHY FARM</h6>
    <h2>A farm that is unlike any other</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend turpis lacus ornare quam non. Elementum tellus elit adipiscing iaculis urna, neque. Metus ultrices diam sed in. At lacus, nibh aliquam vel. Vel quis est turpis auctor cras lacus et, mi a.</p>
</div>
</div>
</section>
<section className='shopsection'>
<div className='container'>
    <div className='content'>
    <h6><i class="fa-brands fa-pagelines"></i>OUR SHOP</h6>
    <h2>High Quality Organic Products</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend <br/>turpis lacus ornare quam non. Elementum tellus.</p>
</div>
    <div className='row'>
    <div className='col-sm-6 col-md-4 col-lg-4'>
          <img src={apple} alt="apple"/>
          <div className='content'>
        <h3>Apples</h3>
        <h4>$ 16.00 USD</h4>
        </div>
</div>
<div className='col-sm-6 col-md-4 col-lg-4'>
<img src={apple} alt="banana"/>
          <div className='content'>
        <h3>Apples</h3>
        <h4>$ 16.00 USD</h4>
        </div>
        </div>
        <div className='col-sm-6 col-md-4 col-lg-4'>
        <img src={apple} alt="apple"/>
          <div className='content'>
        <h3>Apples</h3>
        <h4>$ 16.00 USD</h4>
        </div>
        </div>

</div>
<button type="button" class="btn btn-primary btn-lg ">Viewe Shop</button>
</div>
</section>
        </>
    )
}
export default Home;