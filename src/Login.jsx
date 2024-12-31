import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {
  const backgroundStyle = {
    backgroundImage: 'url("https://wallpapers.com/images/file/mix-color-3840-x-2160-background-a7y5erf3pwf90sg2.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    backgroundPosition: 'center'

  }
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault() // stop the reload
    console.log('register button is trigered')

    try{
      const response = await axios.post('http://localhost:3000/login',{email,password});
      localStorage.setItem('token',response.data.token)
      setMessage('login Successfully')
      navigate('/products')

    } catch(error) {
      console.error(error);
      setMessage('Error in the login')
    }
  }

  return (
    <div style={backgroundStyle}>

      <h1 className='text-center'>login</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='enter email'
          className='text1' value={email}
          onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" className='text1' placeholder='enter password'

          value={password}

          onChange={(e) => setPassword(e.target.value)} required />

        <button className='button1' type='submit'>login</button>

        <button  className='button2' onClick={() => navigate('/register') }>Go to Register</button>

      </form>


    </div>
  )
}

export default Login