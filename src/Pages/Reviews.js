import React from "react";
import image from './images/image.jpg'
const Reviews = () => {
    return(
        <div>
            <div className="header">
            <h1>Beer App</h1>
            </div>
            <div className="pageName">
             <h2>Reviews Page</h2>
            </div>
            <div className="intro">
             <p>Welcome to the reviews page. Below are some of the reviews from people who have bought from the website before:</p>
            </div>
            <div className="reviews">
                <img src={image} alt="person" width="80px" height="80px"></img>
                <p>The first review is from Bob who said "The website is easy to use and you get plenty of options of beer to choose from"</p>
            </div>
            <br/>
            <div className="reviews">
                <img src={image} alt="person" width="80px" height="80px"></img>
                <p>The second review is from Dave who said "I enjoyed using the website and receiving the beers that I had ordered "</p>
            </div>
            <br/>
            <div className="reviews">
                <img src={image} alt="person" width="80px" height="80px"></img>
                <p>The third review is from Sandra who said "I had problems with the site at first but they were resolved after I used the contact form to contact the company "</p>
                
                </div>
                <br/>
                <div className="reviews">
                <img src={image} alt="person" width="80px" height="80px"></img>
                <p>The final review is from Karen who said "The website is designed well and is easy to navigate around "</p>
                </div>
            </div>
    )
}
export default Reviews