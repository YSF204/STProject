import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const MainLayout = ({ isAdmin = false, isInstructor = false }) => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  
  // Check if user has permission to access this layout
  useEffect(() => {
    if (isAdmin && (!currentUser || currentUser.role !== 'ADMIN')) {
      navigate('/login')
    }
    
    if (isInstructor && (!currentUser || currentUser.role !== 'INSTRUCTOR')) {
      navigate('/login')
    }
  }, [currentUser, isAdmin, isInstructor, navigate])
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        {currentUser && <Sidebar />}
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
      
      <Footer />
    </div>
  )
}

export default MainLayout