import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser))
      } catch (err) {
        console.error('Failed to parse stored user data', err)
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])
  
  // Login function
  const login = async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      // This would be replaced with an actual API call
      // const response = await api.post('/auth/login', { email, password })
      
      // Mock response for now
      const mockUser = {
        id: '1',
        name: 'John Doe',
        email,
        role: email.includes('admin') ? 'ADMIN' : 
              email.includes('instructor') ? 'INSTRUCTOR' : 'STUDENT',
        token: 'mock-jwt-token'
      }
      
      setCurrentUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      return mockUser
    } catch (err) {
      setError(err.message || 'Failed to login')
      throw err
    } finally {
      setLoading(false)
    }
  }
  
  // Register function
  const register = async (name, email, password, role = 'STUDENT') => {
    setLoading(true)
    setError(null)
    try {
      // This would be replaced with an actual API call
      // const response = await api.post('/auth/register', { name, email, password, role })
      
      // Mock response for now
      const mockUser = {
        id: '1',
        name,
        email,
        role,
        token: 'mock-jwt-token'
      }
      
      setCurrentUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      return mockUser
    } catch (err) {
      setError(err.message || 'Failed to register')
      throw err
    } finally {
      setLoading(false)
    }
  }
  
  // Logout function
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('user')
  }
  
  // Update profile function
  const updateProfile = async (userData) => {
    setLoading(true)
    setError(null)
    try {
      // This would be replaced with an actual API call
      // const response = await api.put('/users/profile', userData)
      
      // Mock response for now
      const updatedUser = { ...currentUser, ...userData }
      
      setCurrentUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
      return updatedUser
    } catch (err) {
      setError(err.message || 'Failed to update profile')
      throw err
    } finally {
      setLoading(false)
    }
  }
  
  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile
  }
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}