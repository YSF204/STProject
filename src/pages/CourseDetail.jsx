import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const CourseDetail = () => {
  const { id } = useParams()
  const { currentUser } = useAuth()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState(false)
  const [enrolled, setEnrolled] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Simulate fetching course data
    setLoading(true)
    setTimeout(() => {
      // Mock course data
      const mockCourse = {
        id: id,
        title: 'Advanced React Development',
        description: 'Master advanced React concepts including hooks, context API, Redux, and performance optimization techniques. Build complex, scalable applications with the latest React features.',
        longDescription: 'This comprehensive course covers everything you need to know to build professional React applications. You\'ll learn advanced state management, component patterns, routing strategies, and how to optimize your React applications for performance. By the end of this course, you\'ll be able to architect and implement complex React applications from scratch.',
        instructor: 'Jane Smith',
        thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2',
        enrollmentCount: 1250,
        rating: 4.8,
        category: 'web-development',
        price: 79.99,
        level: 'Advanced',
        duration: '10 weeks',
        lessons: 42,
        topics: [
          'Advanced React Hooks',
          'Context API & Redux',
          'Performance Optimization',
          'Testing React Applications',
          'Server-Side Rendering',
          'React with TypeScript',
          'Custom Hooks Development',
          'State Management Patterns'
        ],
        requirements: [
          'Basic knowledge of React and JavaScript',
          'Understanding of ES6 features',
          'Familiarity with npm and node'
        ]
      }
      setCourse(mockCourse)
      // Check if user is enrolled (mock)
      setEnrolled(currentUser && Math.random() > 0.5)
      setLoading(false)
    }, 1000)
  }, [id, currentUser])

  const handleEnroll = () => {
    if (!currentUser) {
      setError('Please log in to enroll in this course')
      return
    }
    
    setEnrolling(true)
    setError('')
    
    // Simulate enrollment API call
    setTimeout(() => {
      setEnrolled(true)
      setEnrolling(false)
    }, 1000)
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="h-96 bg-gray-200 rounded mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
            </div>
            <div className="bg-gray-100 h-64 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Course Not Found</h2>
        <p className="mt-4 text-lg text-gray-500">The course you're looking for doesn't exist or has been removed.</p>
        <div className="mt-8">
          <Link 
            to="/courses" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Course Header */}
      <div className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{course.title}</h1>
              <p className="mt-2 text-lg text-primary-100">{course.description}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start text-sm text-primary-200 space-x-4">
                <span className="flex items-center">
                  <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {course.rating} rating
                </span>
                <span>{course.enrollmentCount.toLocaleString()} students</span>
                <span>{course.level}</span>
                <span>{course.duration}</span>
                <span>{course.lessons} lessons</span>
              </div>
              <div className="mt-4 flex items-center justify-center md:justify-start">
                <span className="text-white font-medium">Instructor: {course.instructor}</span>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-gray-900">${course.price}</div>
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                {enrolled ? (
                  <Link 
                    to="/dashboard" 
                    className="mt-4 w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Go to Course
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="mt-4 w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    onClick={handleEnroll}
                    disabled={enrolling}
                  >
                    {enrolling ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enrolling...
                      </>
                    ) : (
                      'Enroll Now'
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="prose prose-primary max-w-none">
              <h2>About This Course</h2>
              <p>{course.longDescription}</p>
              
              <h3>What You'll Learn</h3>
              <ul>
                {course.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
              
              <h3>Requirements</h3>
              <ul>
                {course.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">This course includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{course.lessons} on-demand video lessons</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Downloadable resources</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full lifetime access</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificate of completion</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Share this course</h4>
                <div className="flex space-x-4">
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">You might also like</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <img
                    className="h-48 w-full object-cover"
                    src={`https://images.unsplash.com/photo-163335612210${item}-3fe601e05bd${item}`}
                    alt="Course thumbnail"
                  />
                  <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-primary-500 text-white text-xs font-bold rounded">
                    4.{item+5} ★
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-900">Related Course {item}</h3>
                    <span className="text-lg font-bold text-primary-600">${59 + item * 10}.99</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">A related course that complements the main course content.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{800 + item * 100} students</span>
                    <Link
                      to={`/courses/${10 + item}`}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail