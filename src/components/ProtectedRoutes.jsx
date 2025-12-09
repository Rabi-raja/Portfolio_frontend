
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../assets/context/AuthContext.jsx'

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  if (loading) return <div>Loading...</div>

  if (!user) return <Navigate to="/login-page" replace />

  if (user.role !== 'admin') {
    alert('Only admin can access this page')
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoutes
