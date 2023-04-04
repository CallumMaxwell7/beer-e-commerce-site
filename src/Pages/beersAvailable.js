import React from "react";
import beer1 from "./images/beer-1.png"
import beer2 from "./images/beer-2.png"
import beer3 from "./images/beer-3.png"
import beer4 from "./images/beer-4.png"
import beer5 from "./images/beer-5.png"
import beer6 from "./images/beer-6.png"
import beer7 from "./images/beer-7.png"
import keg1 from "./images/keg-1.png"
import keg2 from "./images/keg-2.png"
import keg3 from "./images/keg-3.png"
import keg4 from "./images/keg-4.png"
import keg5 from "./images/keg-5.png"
const AvailableBeers = () => {
    return(
        <div>
            <div className="header">
            <h1>Beer App</h1>
            </div>
            <div className="pageName">
             <h2> Beers Available Page</h2>
            </div>
            <div>
            
            </div>
            <div className="intro">
             <p>Welcome to the beers available page. Below are some of the beers that we have available for you to buy from us:</p>
            </div>
            <div className="beers">
                <img src={beer1} alt="pilsner" width="150px" height="150px"/>
                <p>The first beer we have available is the BrewDog Pilsen Lager which is from their Unleash The Yeast series and is a 6.3% ABV Pilsner that works well with spicy crab cakes, spicy cucumber and carrot Thai salad and sweet filled dumplings. It is available at £3 a bottle or a case of 12 for £15 or 24 for £20. </p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={beer2} alt="avery" width="150px" height="150px"/>
                <p>The second beer available is the BrewDog Avery Brown Dredge which is an Imperial Pilsner and was created in collaboration with beer writers. It is a 7.2% ABV pilsner and works well with Vietnamese squid salad, chargrilled corn on the cob with paprika butter and strawberry and rhubarb pie.It is available at £3 a bottle or a case of 12 for £15 or 24 for £20.</p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={beer3} alt="electric-india" width="150px" height="150px"/>
                <p>The third beer we have available is the BrewDog Electric India beer that was re-brewed as a spring seasonal and is a spicy, fruity beer. It is a vibrant hoppy saison and is 5.2% ABV. It works well with mussels with a garlic and herb sauce, crab melt sandwich and shortbread cookies.It is available at £3 a bottle or a case of 12 for £15 or 24 for £20. </p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={beer4} alt="fake-lager" width="150px" height="150px"/>
                <p>The fourth beer we have available is the BrewDog Fake Lager which is a zesty, floral 21st century faux masterpiece with added BrewDog bitterness. It is a 4.7% ABV Bohemian Pilsner and works well with fried crab cakes with avocado salsa, spicy shredded pork rolls with hot dipping sauce and Key Lime pie. It is available at £3 a bottle or a case of 12 for £15 or 24 for £20.  </p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={beer5} alt="bramling-x" width="150px" height="150px"/>
                <p>The fifth beer we have available is the BrewDog Bramling X lager which is an IPA from their single hop IPA series in 2011 and is a 7.5% ABV IPA which works well with warm blackberry pie, vinegar doused fish and chips and aromatic korma curry with lemon and garlic naan. it is available at £3 a bottle or a case of 12 for £15 or 24 for £20.  </p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={beer6} alt="arcade-nation" width="150px" height="150px"/>
                <p>The sixth beer we have available is the BrewDog Arcade nation which is a seasonal black IPA and is on the knife-edge between an Indian Pale Ale and a Stout. It balances so many complex and twisting flavours in the same moment and is a 5.3% ABV IPA that works well with king prawn kebabs, halibut with a mango and tomato salad and mint chocolate ice cream. It is available at £3 a bottle or a case of 12 for £15 or 24 for £20.   </p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={beer7} alt="mixtape-8" width="150px" height="150px"/>
                <p>The seventh beer we have available is the BrewDog Mixtape 8 which is an epic fusion of old Belgian, American new wave and Scotch whisky. The recipe we have used is for the Belgian Tripel base and is a blend of two oak aged beers which are half a hopped up Belgian Tripel and half a Triple Indian Pale Ale. It is a 14.5% ABV level whisky and works well with coriander and chilli crab cakes, goats cheese salad with walnuts, radish and blood orange and pistachio cake. It is available at £15 a bottle.</p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={keg1} alt="craft-for-people" width="150px" height="150px"/>
                <p>The first keg that we have available is the PerfectDraft BrewDog Punk IPA 6L Keg. It is a 5.4% ABV IPA. Punk IPA is the beer that kick-started it.
This light, golden classic has been subverted with new world hops to create an explosion of flavour. Bursts of caramel and tropical fruit with an all-out riot of grapefruit, pineapple and lychee, precede a spiky bitter finish.
This is the beer that started it all - and it’s not done yet. It is available at £30 a keg. </p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={keg2} alt="lost-lager" width="150px" height="150px"/>
                <p>The second keg we have available is the BrewDog Lost Lager 30L Keg. Our new recipe Lost is here. This planet first German-style Pilsner is a 4.5% lager brewed using wind power, a third less water, and would-be waste bread in the malt bill. The addition of Select, Spalter and Saphir hops combine vibrant citrus and herbal notes for an iconic lager taste that's both crisp and refreshing. It is available at £125 a keg.</p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <div className="beers">
                <img src={keg3} alt="hazy-jane" width="150px" height="150px"/>
                <p>The third keg that we have available is the BrewDog Hazy Jane 30L Keg. New England detuned. This full-tilt fruit machine of an IPA packs all the flavour but less of the alcohol. Notes of pineapple, mango, stone-fruit, and a hint of tangerine to mix it up. Brewed with oats and wheat and left unfiltered for a smooth juicy hit.Hazy Jane - Now in session.30 litre steel keg - 52 pints ABV: 5.0%. It is available at £155 a keg.</p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={keg4} alt="planet-pale" width="150px" height="150px"/>
                <p>The fourth keg that we have available is the BrewDog Planet Pale 30L Keg.Planet Pale is our new Headliner range 4.3% session-strength pale ale. This quaffable creation is laced with Columbus, Chinook and Citra hops for a sharp citrus aroma and piney notes that give way to mellow tropical fruit. It is available at £130 a keg. </p>
                <button className="add" type="add">Add To Basket</button>
            </div>
            <br/>
            <div className="beers">
                <img src={keg5} alt="elvis-juice" width="150px" height="150px"/>
                <p>The fifth and final keg we have available is the BrewDog Elvis Juice 30L Keg. An American IPA with a bitter edge that will push your citrus tolerance to the brink and back;
Elvis Juice is loaded with tart pithy grapefruit. This IPA has a caramel malt base, supporting a full frontal citrus overload - grapefruit piled on top of intense aroma hops. Waves of crashing pine, orange and grapefruit round out this citrus infused IPA. 30 Litre keg - 52 pints. ABV: 5.1%. It is available at £120 a keg.</p>
            </div>
            </div>
            
    ) 
}
export default AvailableBeers