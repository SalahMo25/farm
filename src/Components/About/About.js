import './About.css';
import aboutpage  from '../Images/aboutpage.jpg';
import avatar from '../Images/avatar.png';



function About(){
    return(
        <>
         <section className='about sec1'>
<div>
    <div className='row'>
    <div className='col-sm-12 col-md-12 col-lg-6 part1'>
    <img  src={aboutpage} alt="about"/>
</div>
<div className='col-sm-12 col-md-12 col-lg-6 part2'>
    <h1>The mission & story behind Farm</h1>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Donec urna sit adipiscing leo aliquam tempor rut.</p>
    <a href="#about"><button type="button" className="btn  btn-lg">Read More</button></a>
</div>
</div>
</div>
</section>
<section className='sec2'>
<div className='container'>
    <div className='row'>
    <div className='col-sm-6 col-md-6 col-lg-3 '>
    <i class="fa-solid fa-tree"></i>
        <h2>36+</h2>
        <h5>PRODUCTS</h5>
</div>
<div className='col-sm-6 col-md-6 col-lg-3'>
        <i class="fa-solid fa-wheat-awn-circle-exclamation"></i>
        <h2>20+</h2>
        <h5>YEARS OF EXPERIENCE</h5>
        </div>
        <div className='col-sm-6 col-md-6 col-lg-3'>
        <i class="fa-solid fa-circle-check"></i>
        <h2>2,850+</h2>
        <h5>SATISFIED CLIENTS</h5>
        </div>
        <div className='col-sm-6 col-md-6 col-lg-3'>
        <i class="fa-solid fa-user-group"></i>
        <h2>25</h2>
        <h5>LOCAL TEAM MEMBERS</h5>
        </div>
</div>
</div>
</section>
<section className='about sec3' id="about">
<div className='container '>
    <div className='row'>
<div className='col-sm-12 col-md-12 col-lg-6'>
    <h6><i class="fa-brands fa-pagelines"></i>ABOUT US</h6>
    <h2>Our mission is to cultivate healthy food for you and your family</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tellus mauris aliquet urna purus. Volutpat aliquet potenti magna convallis vitae, commodo, pharetra congue ac. Eget eu turpis amet nisl arcu duis. Non sociis tellus morbi sed id neque, tincidunt sed turpis.</p>
</div>
<div className='col-sm-12 col-md-12 col-lg-6 part2'>
    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, eget nisl gravida posuere porttitor semper molestie non sit. Sed sapien, mattis amet, quam proin.”</p>
    <img  src={avatar} alt="about"/>
    <h5>Thomas Meyer<br/><span>Founder of Farm</span></h5>
</div>
</div>
</div>
</section>
<section className='sec4'>
<div className='container'>
    <div className='content'>
    <h6><i class="fa-brands fa-pagelines"></i>ABOUT US</h6>
    <h2>Quality is more than making<br/> a good product</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend <br/>turpis lacus ornare quam non. Elementum tellus.</p>
</div>
    <div className='row'>
    <div className='col-sm-12 col-md-6 col-lg-3 '>
    <i class="fa-solid fa-tree"></i>
        <h3>100% Organic</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu tellus proin commodo. Praesent sed sem mauris.</p>
</div>
<div className='col-sm-12 col-md-6 col-lg-3'>
<i class="fa-brands fa-canadian-maple-leaf"></i>
        <h3>Cruelty Free</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu tellus proin commodo. Praesent sed sem mauris.</p>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3'>
        <i class="fa-solid fa-leaf"></i>
        <h3>Locally Grown</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu tellus proin commodo. Praesent sed sem mauris.</p>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3'>
        <i class="fa-solid fa-flask-vial"></i>
        <h3>No Chemicals or Pesticides</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu tellus proin commodo. Praesent sed sem mauris.</p>
        </div>
</div>
<button type="button" class="btn btn-primary btn-lg ">Viewe Shop</button>
</div>
</section>
        </>
    )
}
export default About;