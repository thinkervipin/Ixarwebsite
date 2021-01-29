import React from 'react';
import './Servc.css';
import CardItem from './CardItem';
import Accordion from 'react-bootstrap';

function Servc() {
  return (
    <>

    <div className='servc'>
      <h1>OUR ROV</h1>
      <hr style={{width:"20%",marginLeft:"40%",}}/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='/images/R1.jpg'
              text='Explore the hidden deepths'
              label='Visual Inspection'
              path='/services'
            />
            <CardItem
              src='./images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src='./images/Inspection.jpg'
              text='Visual Inspection'
              label='underwater'
              path='/visalinspection'
            />
            <CardItem
              src='./images/Barracuda.jpg'
              text='Laser Scaling'
              label='Robotics'
              path='/services'
            />
            <CardItem
              src='./images/thickness.jpg'
              text='Thickness Measurements'
              label='pipeline'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/sonar.jpeg'
              text='Sonar Servey'
              label='Servey'
              path='/services'
            />
            <CardItem
              src='./images/r&d.jpg'
              text='R&D as per Customer'
              label='R & D'
              path='/services'
            />
            <CardItem
              src='./images/bathematry.png'
              text='Bathymetry'
              label='Bathmetry'
              path='/services'
            />
          </ul>

          
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-3"> 

      <div className='servc'>
      <h1>OUR ROV</h1>
      <hr style={{width:"20%",marginLeft:"40%",}}/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='./images/Inspection.jpg'
              text='Visual Inspection'
              label='underwater'
              path='/visalinspection'
            />
            </ul>
            </div>
            </div>
            </div>

      </div>

    </div>

   </>
   
  );
  
  
}

export default Servc;


