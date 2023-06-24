import React from 'react'

function Cart() {
    return (
        <>
            <div className='cart'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 py-5">
                            <img className='' src='../cc.jpg' width="400px"/>
                        </div>
                        <div className="col-lg-6 py-5">
                            <h3>Apple Smart Watch Series 7</h3>
                            <p>Ever since I upgraded from my Pebble to the Apple Watch, it has been the one thing I never leave home without. Yes, I do step out without my smartphone often, but never without the Apple Watch. It has become an integral part of my personality and the connected life I lead. But more importantly, it is the one ally I need in my fight against diabetes.</p>
                            <h2 className='color'><del className='text-secondary'> $15.32</del> $11.73</h2>
                            <h5>Quantity  <input type="number" name='num' placeholder=''></input></h5>
                            <a class="btn btn-color my-2 " href="#" role="button">Add To Cart</a>
                            <h5>Availability: In Stock</h5> 
                            <h5>Condition: New</h5> 
                            <h5>Brand: Apple</h5>                   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;