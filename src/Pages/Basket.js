import React from "react";
import './basket.css'
import Visa from './images/visa.png'
import MasterCard from './images/Mastercard-logo.svg.png'
import AMEX from './images/American_Express_logo_(2018).svg.png'
import Discover from './images/discover.jpg'
const Basket = () => {
    return(
        <div>
            <div className="header">
            <h1>Beer App</h1>
            </div>
            <div className="pageName">
             <h2>Basket Page</h2>
            </div>
            <div className="intro">
             <p>Welcome to the basket page. Please review your order and then complete your details in the provided form to complete your order:</p>
            </div>
            <div className="row">
                <div className="col=75">
                    <div className="container">
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder=""></input>
                                    <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder=""/>
                                    <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder=""></input>
                                    <label for="city"><i class="fa fa-institution"></i> City</label>
                                    <input type="text" id="city" name="city" placeholder=""/>
                                    <div className="row">
                                       <div className="col-50">
                                       <label for="state">State</label>
                                       <input type="text" id="state" name="state" placeholder=""/>


                                        </div> 
                                        <div className="col-50">
                                            <label for="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder=""/>
                                        </div>
                                        <div className="col-50">
                                        <h3>Payment</h3>
                                        <label for="fname">Accepted Cards</label>
                                        <div class="icon-container">
                                       <img src={Visa} alt="visa" height="100px" width="100px"/>
                                       <img src={MasterCard} alt="mastercard" height="100px" width="100px"/>
                                       <img src={AMEX} alt="american-express" height="100px" width="100px"/>
                                       <img src={Discover} alt="discover-card" height="100px" width="100px"/>
                                        </div>
                                        <label for="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder=""></input>
                                        <label for="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder=""></input>
                                        <label for="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder=""></input>
                                        <div className="row">
                                            <div className="col-50">
                                            <label for="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder=""/>
                                            </div>
                                            <div className="col-50">
                                            <label for="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder=""/> 
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <label>
                                   

                                    </label>
                                    
                                    <input type="submit" value="Continue to checkout" class="btn"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="col-25">
                    <div className="container">
                        <h4>Cart
                        <span className="price">
                            <i className="fa fa-shopping-cart"></i>
                            <b>4</b>
                        </span>
                        </h4>
                        <p><a href="/">Product 1</a> <span className="price">£155</span> </p>
                        <p><a href="/">Product 2</a> <span className="price">£15</span> </p>
                        <p><a href="/">Product 3</a> <span className="price">£20</span> </p>
                        <p><a href="/">Product 4</a> <span className="price">£120</span> </p>
                        <br/>
                        <p>Total <span className="price"><b>£310</b></span></p>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Basket