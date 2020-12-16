import React from 'react'
import Products from '../product/Products'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img
                className="home_image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            ></img>
            {/* Product id, title, price */}
            <div c lassName="home_row">
            <Products 
                id={1234} 
                title="Insignia™ - 40 Class LED Full HD"
                price={11.22}
                rating={5}
                image="https://images.samsung.com/is/image/samsung/levant-fhd-t5300-ua43t5300auxtw-frontblack-229857917?$PD_GALLERY_L_JPG$" 
                />
                 <Products 
                id={1234} 
                title="Insignia™ - 40 Class LED Full HD"
                price={11.22}
                rating={5}
                image="https://images.samsung.com/is/image/samsung/levant-fhd-t5300-ua43t5300auxtw-frontblack-229857917?$PD_GALLERY_L_JPG$" 
                />
            </div>
            
        
        </div>
    )
}

export default Home
