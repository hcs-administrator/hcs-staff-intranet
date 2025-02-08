import { useState } from 'react'
import { Form, useNavigate } from "react-router-dom" //useNavigate
import PropTypes from 'prop-types';
import axios from 'axios'

const Login = ({className}) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [time, setTime] = useState("1h")

  const navigate = useNavigate()

  const submitForm = (e) => {

    e.preventDefault()

    let url = `${process.env.VITE_HCS_API}/token/generate`

    const data = {
      time,
      data: { eid : username, password : password }
    }

    axios({
        
        method: 'post',
        url,
        data

    }).then(result => {

        document.querySelector('#wrongData').classList.add('hidden')

        localStorage.setItem('token', result.data)
        navigate({ pathname: '/' })
        navigate(0)
        
    })
   .catch((err) => {
      console.log(err)
      document.querySelector('#wrongData').classList.remove('hidden')
    })
  
  }

  const handleSubmit = (event) => {

    if (event.key === 'Enter') {
      submitForm(event)
    }

  }

  return (
    <div className="col-start-2 col-span-6 flex flex-col items-center space-y-4">
        <h1>Login</h1>
        <div className="w-full h-auto border-2 p-6 border-slate-300 rounded-lg">
            <h1 id="wrongData" className="hidden text-xl text-red-500">Your username or password was entered incorrectly</h1>
            <Form name="login-form" onSubmit={(e) => submitForm(e)}>
            <label htmlFor="username" className='font-bold'>
                Username:
                <input autoComplete="username" autoFocus={window.innerWidth < 1081 ? false : true} tabIndex="1" className="border-2 border-slate-300 rounded-lg m-4 px-2 text-black dark:text-black w-full h-12" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label htmlFor="password" className='font-bold'>
                Password:
                <input autoComplete="current-password" tabIndex="2" onKeyDown={handleSubmit} className="border-2 border-slate-300 rounded-lg m-4 px-2 text-black dark:text-black w-full h-12" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label htmlFor="password" className='font-bold space-y-2'>
                <span>Time to stay logged in for (default is 1 hour):</span>
                <div className="w-full space-x-12 flex flex-row items-center">
                
                <div className="space-x-2">
                    <span>{`1 hour`}</span>
                    <input type="radio" value={time} name="time" onClick={() => setTime("1h")} />
                </div>
                
                <div className="space-x-2">
                    <span>{`1 day`}</span>
                    <input type="radio" value={time} name="time" onClick={() => setTime("1d")} />
                </div>
                
                <div className="space-x-2">
                    <span>{`1 week`}</span>
                    <input type="radio" value={time} name="time" onClick={() => setTime("1w")} />
                </div>
                
                </div>
            </label>
            <input disabled={username === "" || password === ""} tabIndex="3" className="bg-blue-900 dark:bg-red-900 hover:cursor-pointer text-white hover:bg-blue-600 font-bold text-xl rounded-lg m-4 px-2  w-full h-12" type="submit" value="Login" />
            </Form>
        </div>
    </div>
  )
}

Login.propTypes = {
  className: PropTypes.string //.isRequired
}

export default Login

//bg-blue-900 dark:bg-red-900 hover:cursor-pointer disabled:bg-slate-300 disabled:dark:bg-slate-300 hover:bg-blue-600 dark:hover:bg-red-700 text-white disabled:dark:text-slate-500 font-bold text-xl rounded-lg m-4 px-2 w-full h-12