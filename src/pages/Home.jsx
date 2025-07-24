import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [featuredCourses, setFeaturedCourses] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // This would be replaced with an actual API call
    // const fetchFeaturedCourses = async () => {
    //   const response = await api.get('/courses/featured')
    //   setFeaturedCourses(response.data)
    //   setLoading(false)
    // }
    
    // Mock data for now
    setTimeout(() => {
      setFeaturedCourses([
        {
          id: '1',
          title: 'Introduction to Web Development',
          description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
          instructor: 'Jane Smith',
          thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
          enrollmentCount: 1250,
          rating: 4.7
        },
        {
          id: '2',
          title: 'Advanced React Patterns',
          description: 'Master advanced React concepts like hooks, context, and performance optimization.',
          instructor: 'John Doe',
          thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
          enrollmentCount: 850,
          rating: 4.9
        },
        {
          id: '3',
          title: 'Database Design and SQL',
          description: 'Learn how to design efficient databases and write complex SQL queries.',
          instructor: 'Alex Johnson',
          thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
          enrollmentCount: 1050,
          rating: 4.5
        },
        {
          id: '4',
          title: 'Mobile App Development with React Native',
          description: 'Build cross-platform mobile apps using React Native and JavaScript.',
          instructor: 'Sarah Williams',
          thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
          enrollmentCount: 750,
          rating: 4.6
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Students studying"
          />
          <div className="absolute inset-0 bg-primary-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Expand Your Knowledge</h1>
          <p className="mt-6 text-xl text-primary-100 max-w-3xl">
            Discover courses taught by industry experts and expand your skillset with hands-on projects and assessments.
          </p>
          <div className="mt-10">
            <Link
              to="/courses"
              className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-primary-700 hover:bg-primary-50"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Courses Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Featured Courses</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Learn from the best</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Explore our most popular courses and start your learning journey today.</p>
        </div>
        
        {loading ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <img
                    className="h-48 w-full object-cover"
                    src={course.thumbnail}
                    alt={course.title}
                  />
                  <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-primary-500 text-white text-xs font-bold rounded">
                    {course.rating} ★
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{course.description}</p>
                  <p className="mt-3 text-sm font-medium text-gray-700">Instructor: {course.instructor}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{course.enrollmentCount.toLocaleString()} students</span>
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
          >
            View All Courses
            <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">A better way to learn</p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Our platform offers a comprehensive learning experience with features designed to help you succeed.</p>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Interactive Learning</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Engage with interactive content, quizzes, and assignments that reinforce your learning and help you apply new concepts.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Expert Instructors</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Learn from industry professionals with years of experience who provide real-world insights and practical knowledge.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Verified Certificates</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Earn certificates upon course completion to showcase your new skills to employers and enhance your resume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start learning?</span>
            <span className="block">Sign up for free today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            Join thousands of students who are already learning on our platform. Get access to hundreds of courses and start your learning journey.
          </p>
          <Link
            to="/register"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home