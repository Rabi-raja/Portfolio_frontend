// src/pages/ulits/LoginPage.jsx
import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../assets/context/AuthContext.jsx'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await axios.post('http://localhost:8000/api/v1/user/login-user', { email, password })

      if (res.data.token) {
        login(res.data.token)
        navigate('/admin')
      } else {
        setError(res.data.message || 'Login failed')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-900 via-pink-900 to-cyan-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f0f1a] bg-opacity-90 rounded-xl shadow-xl p-10 max-w-md w-full"
        style={{
          boxShadow:
            '0 0 10px #00fff7, 0 0 20px #ff00c8, 0 0 30px #9900ff',
        }}
      >
        <h2
          className="text-4xl font-extrabold mb-8 text-center"
          style={{
            color: '#00fff7',
            textShadow:
              '0 0 5px #00fff7, 0 0 10px #ff00c8, 0 0 20px #9900ff',
          }}
        >
          Login
        </h2>

        <label
          htmlFor="email"
          className="block text-cyan-300 font-semibold mb-2 text-lg"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          className="w-full rounded-md px-4 py-3 mb-6 bg-[#1a1a2e] text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          style={{
            boxShadow:
              '0 0 8px #00fff7 inset',
          }}
        />

        <label
          htmlFor="password"
          className="block text-pink-400 font-semibold mb-2 text-lg"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
          className="w-full rounded-md px-4 py-3 mb-6 bg-[#1a1a2e] text-white placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          style={{
            boxShadow:
              '0 0 8px #ff00c8 inset',
          }}
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-700 rounded-lg text-white font-bold text-lg transition duration-300 hover:brightness-125 shadow-lg"
          style={{
            textShadow:
              '0 0 8px #00fff7, 0 0 10px #ff00c8',
          }}
        >
          Sign In
        </button>

        {error && (
          <p
            className="mt-6 text-center text-red-500 font-semibold text-sm"
            style={{
              textShadow: '0 0 3px #ff0040',
            }}
          >
            {error}
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPage
