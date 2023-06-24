import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Cat from '../Data/Cat';
import Cart from '../Pages/Cart';
function Header() {
  return (
    <> 
<section className='top'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 d-flex'>
            <a href="">Account</a>
            <a href="">Track Order</a>
            <a href="">Support</a></div>
    <div className='col-lg-6 d-flex justify-content-end'>
                
  <div className="dropdown">
   <img src="../USflag.png" />
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    United State
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Banladesh</button></li>
    <li><button className="dropdown-item" type="button">India</button></li>
  </ul>
  </div>
  <div className="dropdown">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    USD
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">BDT</button></li>
  </ul>
  </div>
  <div className="dropdown">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Banladesh
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">English</button></li>
  </ul>
  </div>
</div>
</div>
</div>
             
</section>
<header className='py-3'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-3'>
        <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="" />
      </div>
      <div className='col-lg-6'>
   <nav className="navbar ">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
      <input className="form-control " type="search" placeholder="All Catagories" aria-label="Search" />
      <button className="btn  search " type="submit">Search</button>
    </form>
  </div>
</nav>

      </div>
      <div className='col-lg-3 text-end'>
      <button type="button" class="btn position-relative">
      <i class="bi bi-arrow-clockwise fs-5 "></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    9+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
<button type="button" class="btn  position-relative">
<i class="bi bi-heart"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    6+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
<button type="button" class="btn  position-relative">
<i class="bi bi-bag"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    6+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
<button type="button" class="btn  position-relative">
<i class="bi bi-person"></i>
  <span class="position-absolute top-0 start-100 translate-middle ">
  
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
      </div>
    </div>
  </div>
</header>
<section className='down'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-3'>
 <div className="dropdown py-1 ">
  <button className="btn btn-light dropdown-toggle w-100 height1 fw-bold fs-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  
<i class="fa-solid fa-bars"></i> &nbsp; All Catagories
  </button>
  <ul className="dropdown-menu w-100">
    <li><a className="dropdown-item" href="#">Mobile & Laptops</a></li>
    <li><a className="dropdown-item" href="#">Gaming Entertainment</a></li>
    <li><a className="dropdown-item" href="#">Image & Video</a></li>
    <li><a className="dropdown-item" href="#">Vehicles</a></li>
    <li><a className="dropdown-item" href="#">Furnitures</a></li>
    <li><a className="dropdown-item" href="#">Sport</a></li>
    <li><a className="dropdown-item" href="#">Food & Drinks</a></li>
    <li><a className="dropdown-item" href="#">Fashion Accessories</a></li>
    <li><a className="dropdown-item" href="#">Toilet & Sanitation</a></li>
    <li><a className="dropdown-item" href="#">Makeup Corner</a></li>
    <li><a className="dropdown-item" href="#">Baby Items</a></li>
  </ul>
</div>
      </div>
      <div className='col-lg-6  '>
      <nav className="navbar navbar-expand-lg element.style font-600 fontsize cursor-pointer">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav gap-5">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        
        {Cat.slice(0,5).map((s)=>(
          <li className="nav-item">
          <Link className="nav-link" to={`/cat/${s.id}`} >{s.catName}</Link>
        </li>
        ))}
        
       
      </ul>
    </div>
  </div>
</nav>

      </div>
      <div className='col-lg-3 py-2 text-end'>
   <button className="btn btn-dark btn-lg " type="button"  aria-expanded="false"> Become a Seller 
</button>

      </div>
    </div>
  </div>
</section>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart/" element={<Cart/>} />

       
      </Routes>
    </>
    
  )
}

export default Header