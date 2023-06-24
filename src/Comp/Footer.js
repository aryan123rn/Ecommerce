import React from 'react'
function Footer() {
  return (
    <>
    
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className='logo'>
                    <img src='../logo.svg'/>
                </div>
                <hr/>
                <div className="col-lg-3">
                    <h5 className='pad'>About us</h5>
                    <p className='paddi'>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
                </div>
                <div className="col-lg-3">
                    <ul className='list'>
                    <h5 className='padding'>Feature</h5>
                        <li className='padding'>About Us</li>
                        <li className='padding'>Terms Condition</li>
                        <li className='padding'>Best Products</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                <ul className='list'>
                <h5 className='padding'>General Links</h5>
                        <li className='padding'>Blog</li>
                        <li className='padding'>Tracking Order</li>
                        <li className='padding'>Become Seller</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                <ul className='list'>
                <h5 className='padding'>Helpful</h5>
                        <li className='padding'>Flash Sale</li>
                        <li className='padding'>FAQ</li>
                        <li className='padding'>Support</li>
                    </ul>
                </div>
                <hr/>
                <div className="col-lg-6 py-3">
                <i className="bi padd bi-instagram"></i> 
                <i className="bi padd bi-facebook"></i>
                <i className="bi padd bi-youtube"></i>
               <span>©2022 <strong>Quomodosoft</strong> All rights reserved</span> 
                </div>
                <div className="col-lg-6 py-3 text-end">
                    <img src='../zz.png'/>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer;