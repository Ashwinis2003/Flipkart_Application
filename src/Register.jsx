import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const backgroundStyle = {
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/020/122/825/non_2x/abstract-colorful-background-with-blurred-gradient-mesh-color-effect-for-modern-graphic-design-vector.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    backgroundPosition: 'center'

  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault() // stop the reload
    console.log('register button is trigered')

    try{

      const response = await axios.post('http://localhost:3000/register',{email,password});
      setMessage('Registered Successfully')
      return response.data;

    } catch(error) {
      console.error(error);
      setMessage('Error in the registration')
    }


  }

  return (
    <div style={backgroundStyle}>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter email'
          className='text1' value={email}
          onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" className='text1' placeholder='enter password'

          value={password}

          onChange={(e) => setPassword(e.target.value)} required />

        <button  className='button2' type='submit'>Register</button>

        <button  className='button1' onClick={() => navigate('/')}>Go to login</button>

      </form>

      {
        message
      }
    </div>
  )
}

export default Register