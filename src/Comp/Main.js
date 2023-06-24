import React from 'react'
import { Link } from 'react-router-dom';
import Cartdata from '../Data/Cartdata';
import Shopbybrand from './Shopbybrand';


function Main() {
  return (
    <>
           <section className='top1 '>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-8'>
                            <img className='w-100' src='../samsumg.png' />
                        </div>
                        <div className='col-lg-4'>
                            <img className='aa w-100' src="../apple.png" />
                            <img className='bb w-100' src="../xbox.png" />
                        </div>
                    </div>
                    <div className='free-shipping py-3 px-3 '>
                        <div className='row'>
                            <div className="col-lg-3 d-flex">
                                <div className="flex-shrink-0">
                                    <i className="bi bi-cart3 logo1" />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <p className='font700 p-0 m-1'>Free Shipping</p>
                                    <p className='p-0 m-1'>When ordering over $100</p>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex">
                                <div className="flex-shrink-0">
                                    <i className="bi bi-cart3 logo1" />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <p className='font700 p-0 m-1'>Free Return</p>
                                    <p className='p-0 m-1'>Get Return within 30 days</p>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex">
                                <div className="flex-shrink-0">
                                    <i className="bi bi-cart3 logo1" />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <p className='font700 p-0 m-1'>Secure Payment</p>
                                    <p className='p-0 m-1'>Secure Online Payment</p>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex">
                                <div className="flex-shrink-0">
                                    <i className="bi bi-cart3 logo1" />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <p className='font700 p-0 m-1'>Best Quality</p>
                                    <p className='p-0 m-1'>Original Product Guarented</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='Gamer-World py-5'>
                    <div className='row'>
                            <h3 className=''>Gamer World</h3>
                                <div className='box'>
                                    
                                {Cartdata.map((a)=>(
                                    <div className='gamer-loop'> 
                                     <img src={a.img} width="100%" height="300px" />
                                     <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className='paddin'>
                                <p>{a.title} </p>
                                <h4 className='text-danger'><del className='text-secondary'> $15.32</del> $11.73</h4>
                                <Link class="btn btn-primary" to={ `/Cart/`} role="button">Add To Cart</Link>
                                </div>
                                     </div>
                                ))}
                                </div>
                                <br />
                                
                            
                            
                        </div>
                </div>
                </div>
         <Shopbybrand/>
               
                <section className='topsellingproduct'>
                    <div className='container  '>
                            <h3>Top Selling Product</h3>
                        <div className='row'>
                            <div className='col-lg-6 d-flex py-3 '>
                                <div className='bgg d-flex'>
                                <img className='paad' src='../product-img-4.jpg'/>
                                <div className='paddin paad'>
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>       
                                <p className='fw'>This is lenovo laptop and cilck here..</p>
                                <h4 className='text-danger'><del className='text-secondary'> $15.32</del> $11.73</h4>
                                <a class="btn  " href="#" role="button">Add To Cart</a>
                                </div>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex py-3 '>
                                <div className='bgg1 d-flex'>
                                <img className='paad' src='../bb1.jpg'/>
                                <div className='paddin paad'>
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p className='fw'>This is oneplus 6 and cilck here..</p>
                                <h4 className='text-danger'><del className='text-secondary'> $15.32</del> $11.73</h4>
                                <a class="btn  " href="#" role="button">Add To Cart</a>
                                </div>
                            </div>
                            </div>
                            <div className='col-lg-6 d-flex py-3 '>
                                <div className='bgg1 d-flex'>
                                <img className='paad' src='../bb3.jpg'/>
                                <div className='paddin paad'>
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p className='fw'>This is the product and cilck here..</p>
                                <h4 className='text-danger'><del className='text-secondary'> $15.32</del> $11.73</h4>
                                <a class="btn  " href="#" role="button">Add To Cart</a>
                                </div>
                            </div>
                            </div>
                            <div className='col-lg-6 d-flex py-3'>
                                <div className='bgg1 d-flex'>
                                <img className='paad' src='../bb2.jpg'/>
                                <div className='paddin paad'>
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p className='fw'>This is the fan and cilck here..</p>
                                <h4 className='text-danger'><del className='text-secondary'> $15.32</del> $11.73</h4>
                                <a class="btn  " href="#" role="button">Add To Cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
              
                <section className='bestseller py-4'>
                   <div className='container'>
                        <h3>Best Seller</h3>
                    <div className="row">
                        <div className='bg d-flex'>
                            <div className="box1">
                              <img className='paddin' src='../cc1.png'/>
                            </div>
                            <div className="box1 rr">
                               <img className='paddin' src='../cc1.png'/>
                            </div>
                            <div className="box1">
                               <img className='paddin' src='../cc1.png'/>
                            </div>
                            <div className="box1">
                               <img className='paddin' src='../cc1.png'/>
                            </div>
                            <div className="box1">
                               <img className='paddin' src='../cc1.png'/>
                            </div>
                            <div className="box1">
                               <img className='paddin' src='../cc1.png'/>
                            </div>
                        
                        </div>
                    </div>
                   </div>
                </section>
                <div className='image'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className='w-100' src='../dd1.png'></img>
                        </div>
                        <div className="col-lg-6">
                        <img className='w-100' src='../dd2.png'></img>
                        </div>
                    </div>
                </div>
                </div>
                </section>

                <div className='Popularsales py-5'>
                    <div className='container'>
                    <div className='row'>
                            <h3 className=''>Popular Sales</h3>
                            <div className='col-lg-3  ggg'>
                                <div className='box'>
                                    <img src='../bb1.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className='paddin'>
                                <p>This is apple smart watch and cilck here..</p>
                                <h4 className='text-danger'><del className='text-secondary'> $15.32</del> $11.73</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                                </div>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src='../bb.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className='paddin'>
                                <p>This is ps4 joy Stick and click here..</p>
                                <h4 className='text-danger'><del className='text-secondary'>$27.27</del> $18.73</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src="../bb2.jpg" width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>This is gaming headphone...</p>
                                <h4 className='text-danger'><del className='text-secondary'>$16.27</del> $12.75</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src='../bb3.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>This is gaming Joy Stick and click here..</p>
                                <h4 className='text-danger'><del className='text-secondary'>$29.27</del> $19.69</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                        </div>
                </div>
                </div>
                <div className='Headphones py-5'>
                <div className='container'>
                        <div className='row'>
                        <img src='../ee.png'/>
                        </div>
                        </div>
                </div>
                <div className='New-arrivals'>
                    <div className="container">
                        <div className="row">
                            <h3>New Arrivals</h3>
                            <div className='col-lg-3  ggg'>
                                <div className='box'>
                                    <img src='../f1.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className='paddin'>
                                <p>This is apple smart watch and cilck here..</p>
                                <h4 className='text-danger'><del className='text-secondary'> $15.32</del> $11.73</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                                </div>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src='../f2.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className='paddin'>
                                <p>This is ps4 joy Stick and click here..</p>
                                <h4 className='text-danger'><del className='text-secondary'>$27.27</del> $18.73</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src="../f3.jpg" width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>This is gaming headphone...</p>
                                <h4 className='text-danger'><del className='text-secondary'>$16.27</del> $12.75</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src='../ff9.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>This is gaming Joy Stick and click here..</p>
                                <h4 className='text-danger'><del className='text-secondary'>$29.27</del> $19.69</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            <div className='col-lg-3  ggg'>
                                <div className='box'>
                                    <img src='../bb1.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className='paddin'>
                                <p>This is apple smart watch and cilck here..</p>
                                <h4 className='text-danger'><del className='text-secondary'> $15.32</del> $11.73</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                                </div>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src='../bb.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className='paddin'>
                                <p>This is ps4 joy Stick and click here..</p>
                                <h4 className='text-danger'><del className='text-secondary'>$27.27</del> $18.73</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src="../bb2.jpg" width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>This is gaming headphone...</p>
                                <h4 className='text-danger'><del className='text-secondary'>$16.27</del> $12.75</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src='../bb3.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>This is gaming Joy Stick and click here..</p>
                                <h4 className='text-danger'><del className='text-secondary'>$29.27</del> $19.69</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            <div className='col-lg-3  ggg'>
                                <div className='box'>
                                    <img src='../cc.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className='paddin'>
                                <p>This is apple smart watch and cilck here..</p>
                                <h4 className='text-danger'><del className='text-secondary'> $15.32</del> $11.73</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                                </div>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src='dd.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className='paddin'>
                                <p>This is ps4 joy Stick and click here..</p>
                                <h4 className='text-danger'><del className='text-secondary'>$27.27</del> $18.73</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src="../ss.jpg" width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>This is gaming headphone...</p>
                                <h4 className='text-danger'><del className='text-secondary'>$16.27</del> $12.75</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                            <div className='col-lg-3 ggg'>
                                <div className='box'>
                                    <img src='../bb.jpg' width='100%' height="300px" /></div>
                                <br />
                                <div className='star'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>This is gaming Joy Stick and click here..</p>
                                <h4 className='text-danger'><del className='text-secondary'>$29.27</del> $19.69</h4>
                                <a class="btn btn-primary" href="#" role="button">Add To Cart</a>
                            </div>
                        </div>
                </div>
                </div>

                <div className='watch pt-5'>
                <div className='container'>
                        <div className='row'>
                        <img className='wth' src='../hh.png'/>
                        </div>
                        </div>
                </div>
                     
    </>
  )
}

export default Main;