import React from 'react'
import {Assets} from '../assets/Assets'

const About = () => {
  return (
    <div className='container about mt-5 text'>
        <h1>About us</h1>
        <h2>Learn more <span>about us</span></h2>
        <div className='row gy-5'>
            <div className='col-lg-6'>
                <img src={Assets.img3} alt="" className='img-fluid abc'/>
            </div>
            <div className='col-lg-6'>
              <p>Baked goods have been around for thousands of years. The art of baking was very popular during the Roman Empire. </p>
              <ul>
                <li>
                A bakery is an establishment that produces and sells flour-based baked goods made in an oven such as bread, cookies, cakes, doughnuts, bagels, pastries, and pies.Some retail bakeries are also categorized as cafés, serving coffee and tea to customers who wish to consume the baked goods on the premises. In some countries, a distinction is made between bakeries, which primarily sell breads, and pâtisseries, which primarily sell sweet baked goods.
                </li>
                <li>
                This trend became common, and soon, baked products were sold in streets of Rome, Germany, London, and more. A system of delivering baked goods to households arose as the demand increased significantly. This prompted bakers to establish places where people could purchase baked goods. The first open-air market for baked goods was established in Paris, and since then bakeries have become a common place to purchase delicious goods and to socialize.
                </li>
                <li>
                World War II directly affected the bread industry in the UK. Baking schools closed during this time, so when the war ended there was a lack of skilled bakers. This resulted in new methods being developed to satisfy the world's desire for bread, including chemical additives, premixes and specialised machinery.
                </li>
          
           
                
                
              </ul>
            </div>
        </div>
    </div>
  )
}

export default About