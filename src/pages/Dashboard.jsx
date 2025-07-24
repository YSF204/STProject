import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { currentUser } = useAuth()
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const [upcomingAssessments, setUpcomingAssessments] = useState([])
  const [recentActivities, setRecentActivities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This would be replaced with actual API calls
    // const fetchDashboardData = async () => {
    //   const coursesResponse = await api.get('/students/courses')
    //   const assessmentsResponse = await api.get('/students/upcoming-assessments')
    //   const activitiesResponse = await api.get('/students/recent-activities')
    //   
    //   setEnrolledCourses(coursesResponse.data)
    //   setUpcomingAssessments(assessmentsResponse.data)
    //   setRecentActivities(activitiesResponse.data)
    //   setLoading(false)
    // }
    
    // Mock data for now
    setTimeout(() => {
      setEnrolledCourses([
        {
          id: '1',
          title: 'Introduction to Web Development',
          instructor: 'Jane Smith',
          thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
          progress: 75,
          nextLesson: 'CSS Flexbox Layout'
        },
        {
          id: '2',
          title: 'Advanced React Patterns',
          instructor: 'John Doe',
          thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
          progress: 30,
          nextLesson: 'Context API Deep Dive'
        },
        {
          id: '3',
          title: 'Database Design and SQL',
          instructor: 'Alex Johnson',
          thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
          progress: 50,
          nextLesson: 'Advanced Joins and Subqueries'
        },
      ])
      
      setUpcomingAssessments([
        {
          id: '1',
          title: 'HTML & CSS Quiz',
          courseTitle: 'Introduction to Web Development',
          dueDate: '2023-06-15',
          type: 'quiz'
        },
        {
          id: '2',
          title: 'React Components Project',
          courseTitle: 'Advanced React Patterns',
          dueDate: '2023-06-20',
          type: 'assignment'
        },
        {
          id: '3',
          title: 'Database Schema Design',
          courseTitle: 'Database Design and SQL',
          dueDate: '2023-06-25',
          type: 'project'
        },
      ])
      
      setRecentActivities([
        {
          id: '1',
          type: 'completed_lesson',
          courseTitle: 'Introduction to Web Development',
          lessonTitle: 'HTML Fundamentals',
          date: '2023-06-10'
        },
        {
          id: '2',
          type: 'submitted_assignment',
          courseTitle: 'Advanced React Patterns',
          assignmentTitle: 'Custom Hooks Implementation',
          date: '2023-06-08'
        },
        {
          id: '3',
          type: 'enrolled_course',
          courseTitle: 'Database Design and SQL',
          date: '2023-06-05'
        },
      ])
      
      setLoading(false)
    }, 1000)
  }, [])
  
  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  // Helper function to get assessment icon
  const getAssessmentIcon = (type) => {
    switch (type) {
      case 'quiz':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      case 'assignment':
        return (
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        )
      case 'project':
        return (
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
    }
  }
  
  // Helper function to get activity icon
  const getActivityIcon = (type) => {
    switch (type) {
      case 'completed_lesson':
        return (
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )
      case 'submitted_assignment':
        return (
          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
        )
      case 'enrolled_course':
        return (
          <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg mb-6 p-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {currentUser?.name || 'Student'}!</h1>
        <p className="mt-2 text-gray-600">Track your progress, manage your courses, and stay on top of your learning journey.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrolled Courses Section */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
              <Link to="/courses" className="text-primary-600 hover:text-primary-800 text-sm font-medium">Browse more courses</Link>
            </div>
            
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="animate-pulse flex items-start p-4 border border-gray-200 rounded-lg">
                    <div className="w-16 h-16 bg-gray-200 rounded mr-4" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                      <div className="h-2 bg-gray-200 rounded w-5/6" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="flex flex-col sm:flex-row items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-150">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full sm:w-16 h-16 object-cover rounded mb-4 sm:mb-0 sm:mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-primary-600 h-2.5 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{course.progress}%</span>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">Next: {course.nextLesson}</p>
                      </div>
                    </div>
                    <Link
                      to={`/courses/${course.id}`}
                      className="mt-4 sm:mt-0 px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded hover:bg-primary-200 transition-colors duration-150"
                    >
                      Continue
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Assessments Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Assessments</h2>
            
            {loading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="animate-pulse flex items-center p-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3" />
                    <div className="flex-1 space-y-1">
                      <div className="h-3 bg-gray-200 rounded w-3/4" />
                      <div className="h-2 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {upcomingAssessments.map((assessment) => (
                  <div key={assessment.id} className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors duration-150">
                    <div className="mr-3">
                      {getAssessmentIcon(assessment.type)}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{assessment.title}</h3>
                      <p className="text-xs text-gray-500">{assessment.courseTitle}</p>
                      <p className="text-xs font-medium text-primary-600 mt-1">Due: {formatDate(assessment.dueDate)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Recent Activity Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="animate-pulse flex items-start">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3" />
                    <div className="flex-1 space-y-1">
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flow-root">
                <ul className="-mb-8">
                  {recentActivities.map((activity, index) => (
                    <li key={activity.id}>
                      <div className="relative pb-8">
                        {index !== recentActivities.length - 1 && (
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                        )}
                        <div className="relative flex space-x-3">
                          <div>{getActivityIcon(activity.type)}</div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              {activity.type === 'completed_lesson' && (
                                <p className="text-sm text-gray-700">Completed <span className="font-medium">{activity.lessonTitle}</span> in <span className="font-medium">{activity.courseTitle}</span></p>
                              )}
                              {activity.type === 'submitted_assignment' && (
                                <p className="text-sm text-gray-700">Submitted <span className="font-medium">{activity.assignmentTitle}</span> for <span className="font-medium">{activity.courseTitle}</span></p>
                              )}
                              {activity.type === 'enrolled_course' && (
                                <p className="text-sm text-gray-700">Enrolled in <span className="font-medium">{activity.courseTitle}</span></p>
                              )}
                            </div>
                            <div className="text-right text-xs whitespace-nowrap text-gray-500">
                              <time dateTime={activity.date}>{formatDate(activity.date)}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard