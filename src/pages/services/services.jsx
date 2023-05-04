import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../components/footer/footer';
import Navbar1 from '../../components/header/navbar1'
import './service.css'

const Services = () => {
  const services = [
    {
      title: 'Pest Scanning',
      description: 'We use advanced camera options to capture in your crops and notify you on what type of pesticides is to be used.',
      image: 'https://images.unsplash.com/photo-1624806462054-836d2c66169e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODMwODkyMDM&ixlib=rb-4.0.3&q=85',
      link: 'http://lorempixel.com/400/300/sports/1/',
      price: '$5.00',
      price_range: '$1.00 - $10.00',
    },
    {
      title: 'Plant Diseases',
      description: 'Our team of experts can help identify and treat plant diseases.',
      image: 'https://www.agric.wa.gov.au/sites/gateway/files/styles/original/public/Wirrega_blotch_lesions_expand_to_whole_leaf.jpg?itok=3_3LLgOy',
      link: 'http://lorempixel.com/400/300/sports/1/',
      price: '$3.00',
      price_range: '$1.00 - $10.00',
    },
    {
      title: 'Soil Testing',
      description: 'Our team can visit your farm and check pH levels, water content, and fertility of the soils and suggest which crops to grow accordingly.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPsVcKX_e3Mwyh2CvJPfh3WsoqWYMejElig&usqp=CAU',
      link: 'http://lorempixel.com/400/300/sports/1/',
      price: '$7.00',
      price_range: '$1.00 - $10.00',
    },
  ]

  const handleBooking = (serviceTitle) => {
    //logical part here
    alert(`Taking you to the Booking appointment page for appointment in ${serviceTitle}`);
  }
  return (
    <div id="service-container">
      <Navbar1/>
      <div className="container">
        <h1> Our Services</h1>
        <div className="services">
          {services.map((service, index) => (
            <div key={index} className='service'>
              <h2>{service.title}</h2>
              <img src={service.image} alt="" />
              <p id='description'>{service.description}</p>
              <p>Today's price {service.price}</p>
              <p>Price range from {service.price_range}</p>
              <p>{service.link}</p>
              <button onClick={() => handleBooking(service.title)}><Link to='/booking-appointment'>Book Appointment</Link></button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Services