import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return (
        <div className="home">
            <div className="home_container">
                <img 
                className="home__image"
                src=
                    "https://images-eu.ssl-images-amazon.com/images/G/02/digital/videos/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpeg" 
                    alt=""
                />
                
                <div className="home_row">
                    <Product 
                        title="The Lead Startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product />
                    
                </div>

                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home_row">
                    <Product />               
                </div>
            </div>
        </div>
    );
}

export default Home;