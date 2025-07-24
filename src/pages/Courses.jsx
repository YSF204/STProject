import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  
  useEffect(() => {
    // This would be replaced with an actual API call
    // const fetchCourses = async () => {
    //   const response = await api.get('/courses', {
    //     params: { search: searchTerm, category: categoryFilter, sort: sortBy }
    //   })
    //   setCourses(response.data)
    //   setLoading(false)
    // }
    
    // Mock data for now
    setTimeout(() => {
      setCourses([
        {
          id: '1',
          title: 'Introduction to Web Development',
          description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
          instructor: 'Jane Smith',
          thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
          enrollmentCount: 1250,
          rating: 4.7,
          category: 'web-development',
          price: 49.99,
          level: 'Beginner'
        },
        {
          id: '2',
          title: 'Advanced React Patterns',
          description: 'Master advanced React concepts like hooks, context, and performance optimization.',
          instructor: 'John Doe',
          thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
          enrollmentCount: 850,
          rating: 4.9,
          category: 'web-development',
          price: 79.99,
          level: 'Advanced'
        },
        {
          id: '3',
          title: 'Database Design and SQL',
          description: 'Learn how to design efficient databases and write complex SQL queries.',
          instructor: 'Alex Johnson',
          thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
          enrollmentCount: 1050,
          rating: 4.5,
          category: 'database',
          price: 59.99,
          level: 'Intermediate'
        },
        {
          id: '4',
          title: 'Mobile App Development with React Native',
          description: 'Build cross-platform mobile apps using React Native and JavaScript.',
          instructor: 'Sarah Williams',
          thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
          enrollmentCount: 750,
          rating: 4.6,
          category: 'mobile-development',
          price: 69.99,
          level: 'Intermediate'
        },
        {
          id: '5',
          title: 'Python for Data Science',
          description: 'Learn Python programming and its applications in data analysis and visualization.',
          instructor: 'Michael Brown',
          thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935',
          enrollmentCount: 1500,
          rating: 4.8,
          category: 'data-science',
          price: 89.99,
          level: 'Beginner'
        },
        {
          id: '6',
          title: 'Machine Learning Fundamentals',
          description: 'Understand the core concepts of machine learning and build your first models.',
          instructor: 'Emily Chen',
          thumbnail: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc',
          enrollmentCount: 1200,
          rating: 4.7,
          category: 'data-science',
          price: 99.99,
          level: 'Intermediate'
        },
        {
          id: '7',
          title: 'UI/UX Design Principles',
          description: 'Learn the fundamentals of user interface and user experience design.',
          instructor: 'David Wilson',
          thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
          enrollmentCount: 950,
          rating: 4.6,
          category: 'design',
          price: 69.99,
          level: 'Beginner'
        },
        {
          id: '8',
          title: 'DevOps and CI/CD Pipelines',
          description: 'Master the tools and practices for continuous integration and deployment.',
          instructor: 'Robert Taylor',
          thumbnail: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
          enrollmentCount: 650,
          rating: 4.8,
          category: 'devops',
          price: 89.99,
          level: 'Advanced'
        },
      ])
      setLoading(false)
    }, 1000)
  }, [searchTerm, categoryFilter, sortBy])
  
  // Filter courses based on search term
  const filteredCourses = courses.filter(course => {
    // Filter by search term
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    
    // Filter by category
    const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter
    
    return matchesSearch && matchesCategory
  })
  
  // Sort courses based on selected option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.enrollmentCount - a.enrollmentCount
      case 'rating':
        return b.rating - a.rating
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      default:
        return 0
    }
  })
  
  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'database', name: 'Database' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'devops', name: 'DevOps' },
  ]
  
  // Sort options
  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
  ]
  
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Explore Our Courses</h1>
            <p className="mt-4 text-xl text-primary-100">
              Discover a wide range of courses to enhance your skills and advance your career.
            </p>
          </div>
        </div>
      </div>
      
      {/* Filters and Search Section */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3">
            <label htmlFor="search" className="sr-only">Search courses</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search courses"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <label htmlFor="category" className="sr-only">Category</label>
              <select
                id="category"
                name="category"
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="sort" className="sr-only">Sort by</label>
              <select
                id="sort"
                name="sort"
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, index) => (
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
        ) : sortedCourses.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedCourses.map((course) => (
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
                  <div className="absolute bottom-0 left-0 m-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs font-medium rounded">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                    <span className="text-lg font-bold text-primary-600">${course.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{course.description}</p>
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
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                onClick={() => {
                  setSearchTerm('')
                  setCategoryFilter('all')
                  setSortBy('popular')
                }}
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses