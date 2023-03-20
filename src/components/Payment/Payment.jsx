import React from 'react'
import { useState } from 'react'
import './Payment.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EmailIcon from '@mui/icons-material/Email';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PersonIcon from '@mui/icons-material/Person';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';



function Payment() {
  const [price, setprice] = useState('500');
  const mobile = window.innerWidth <= 768 ? true : false;
  const handleChange = (e) => {
    setprice(e.target.value);
  };

  return (

    <div className='payment' id='payment'>
      <p>Payment Gateway</p>
      <form action="">
        <div className='left-f'>
          <label for="fname"><PersonIcon /> Full Name</label>
          <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
          <label for="email"> <EmailIcon /> Email</label>
          <input type="text" id="email" name="email" placeholder="john@example.com"></input>
          <label for="city"><LocationCityIcon /> City</label>
          <input type="text" id="city" name="city" placeholder="xyz"></input>
          <label for="plan-s"> Choose your plan</label>
          <select name="plans-s" id="plans-s" onChange={handleChange}>
            <option value="500">Basic</option>
            <option value="800">Premium</option>
            <option value="1000">Pro</option>
          </select>
        </div>
        <div className='right-f'>
          <label for="fname">Accepted methods- CARD<CreditCardIcon /></label>
          <label for="cvv"> CVV</label>
          <input type="number" id='cvv' name='cvv' placeholder="123"></input>
          <label for="card-no">CARD-NO</label>
          <input type="number" id='card-no' name='card-no' placeholder="1111-2222-3333-4444"></input>
          <label for="name-on-card"> NAME ON CARD</label>
          <input type="text" id='name-on-card' name='name-on-card' placeholder="abc def"></input>
          <button type='submit' className='pay-btn'>PAY ₹{price}</button>
        </div>

      </form>

      <Link to="/"  ><CancelIcon className='back' style={{ fontSize: (mobile === true) ? 40 : 60, color: 'black' }} /></Link>
    </div>
  )
}

export default Payment
