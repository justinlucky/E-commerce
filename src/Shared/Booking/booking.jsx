import React, {useState} from 'react'

const Booking = () => {
  const [services, setServices] = useState([]);

  const [location, setLocation] = useState('');

  const [paymentMode, setPaymentMode] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    // Send data to PHP backend using Fetch API or Axios

    // Handle response as needed

  };

  const handleServiceChange = (e) => {

    const selectedServices = Array.from(e.target.selectedOptions, (option) => option.value);

    setServices(selectedServices);

  };

  const handleLocationChange = (e) => {

    setLocation(e.target.value);

  };
  
  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  
  return (
    <div id='booking-container'>
      <h1>Slot Booking</h1>
      <form onSubmit={handleSubmit}>

        <label>

          Select Services:

          <select multiple={true} value={services} onChange={handleServiceChange}>

            <option value='service1'>Service 1</option>

            <option value='service2'>Service 2</option>

            <option value='service3'>Service 3</option>

          </select>

        </label>

        <br />

        <label>

          Current Location:

          <input type='text' value={location} onChange={handleLocationChange} />

        </label>

        <br />
        <label>

          Payment Mode:

          <select value={paymentMode} onChange={handlePaymentModeChange}>

            <option value='creditCard'>Credit Card</option>

            <option value='debitCard'>Debit Card</option>

            <option value='paypal'>PayPal</option>

          </select>

        </label>

        <br />

        <button type='submit'>Book Now</button>

      </form>


		
    </div>
  )
}

export default Booking
