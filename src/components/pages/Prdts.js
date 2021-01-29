import React from 'react';
import './Prdts.css';
import CardItem from '../CardItem'
import Media from 'react-bootstrap/Media'
import Carousel from 'react-bootstrap/Carousel'

import pic from '../pages/img/ROV2.png'
import pic1 from '../pages/img/ROV4.jpg'
import detail from '../pages/img/RovDetails.jpg'
import label from '../pages/img/Labled3.jpg'
import Footer from '../Footer'
import soft from '../pages/img/soft.jpg'
function Prdts() {
  return (
    <>
    

   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<span>
  .
</span>

    
    <div className="container" style={{backgroundColor:"", boxSizing:"bodrer-box", width:"100%"}}> 
      <div className ="row">
        <div className="col-md-6">
        <img src={detail}
    width={600}
    height={450}
    className="mr-3"
    
    alt="Generic placeholder"
  />
        </div>
        <div className="col-md-6">
        {/* <img src='./images/ROV2.png'alt="Generic placeholder"/> */}
        <hr style={{width:"40%",marginLeft:"40%",}}/>
      <div className='cards__continer'>
        <div className='cards__wraper'>
          
          <ul className='cards__itms'>
            <CardItem
              src='./images/ROV2.png'
              text='Visual Inspection'
              label='underwater'
              path='/visalinspection'
            />
            </ul></div></div>
        </div>
      </div>
    </div>
    <div className="container" style={{backgroundColor:"", boxSizing:"bodrer-box", width:"100%"}}> 
      <div className ="row">
        <div className="col-md-6">
        <img src={label}
    width={700}
    height={550}
    className="mr-3"
    
    alt="Generic placeholder"
  />
        </div>
        <div className="col-md-6">
        <img src='./images/ROV2.png'
    width={720}
    height={500}
    className="mr-3"
    
    alt="Generic placeholder"
  />
          
        </div>
      </div>
    </div>
    
      <div className='servc'>
      <hr style={{width:"20%",marginLeft:"40%",}}/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='./images/2.jpg'
              text='Visual Inspection'
              label='underwater'
              path='/visalinspection'
            />
            <CardItem
              src='./images/2.jpg'
              text='Laser Scaling'
              label='Robotics'
              path='/services'
            />
            <CardItem
            src='./images/2.jpg'
              text='Thickness Measurements'
              label='pipeline'
              path='/services'
            />
          </ul>


          
        </div>
      </div>
    </div>

   <div className="container">
    <div className="row mb-2">
    
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h2 class="featurette-heading">Product Details</h2>
         
          <p className="card-text mb-auto">

          The BlueROV2 is the world’s most affordable high-performance underwater ROV. With six- and eight-thruster configurations, a number of available accessories, and open source software, it has an unprecedented level of performance, flexibility, and expandability. With several thousand units out in the field, the BlueROV2 is one of the most popular underwater drones on the market!
          </p>
          <p1>
          The BlueROV2 comes partially assembled and requires 6-12 hours of user assembly to complete. During the assembly process, you learn how all of the components of the system work and fit together and it leaves you with the knowledge needed to make upgrades and improvements in the future!
          </p1>
         
        </div>
        <div className="col-auto d-none d-lg-block">
          {/* <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
          <img src={label}  width="400" height="300"/>
        </div>
      
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Design</strong>
          <h3 className="mb-0">Post title</h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
    </div>
  </div>
  </div>

  <div>

      
    <hr class="featurette-divider "/>

<div class="row border rounded overflow-hidden">
    <div class="col-sm-7" style={{padding:"10%"}} >
        <h2 class="featurette-heading">Software and User Interface </h2>
         <p>
         The ROV is controlled by a drone flight controller running the open-source Ardusub subsea vehicle control firmware. As part of the ArduPilot project, it brings to the ROV a vast number of features, capabilities, and an extensive user community.

         At the surface, the pilot controls the ROV through a laptop computer and gamepad controller. The open-source QGroundControl application acts as the user interface, providing the live video stream, sensor feedback and information, and the ability to change settings and configuration.
         </p>
    </div>
    <div class="col-sm-5">
        <img class="featurette-image img-responsive center-block" src={soft} height="370px" width="600px" alt="Generic placeholder image"/>
    </div>
</div>


  </div>
  
  <Footer/>
   </>
   
  );
  
  
}

export default Prdts;


