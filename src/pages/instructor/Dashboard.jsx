import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpenIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  PlusIcon,
  EyeIcon,
  PencilIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const InstructorDashboard = () => {
  const [stats, setStats] = useState({})
  const [courses, setCourses] = useState([])
  const [recentActivities, setRecentActivities] = useState([])
  const [upcomingTasks, setUpcomingTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data - replace with actual API calls
    setTimeout(() => {
      setStats({
        totalCourses: 5,
        totalStudents: 1250,
        totalRevenue: 15750,
        averageRating: 4.8,
        coursesInProgress: 2,
        completedCourses: 3
      })

      setCourses([
        {
          id: '1',
          title: 'Introduction to Web Development',
          thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
          status: 'published',
          enrollments: 245,
          rating: 4.8,
          revenue: 4900,
          lastUpdated: '2024-07-20',
          progress: 100
        },
        {
          id: '2',
          title: 'Advanced React Patterns',
          thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
          status: 'published',
          enrollments: 189,
          rating: 4.9,
          revenue: 5670,
          lastUpdated: '2024-07-18',
          progress: 100
        },
        {
          id: '3',
          title: 'JavaScript Fundamentals',
          thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a',
          status: 'published',
          enrollments: 156,
          rating: 4.7,
          revenue: 3120,
          lastUpdated: '2024-07-15',
          progress: 100
        },
        {
          id: '4',
          title: 'Node.js Backend Development',
          thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
          status: 'draft',
          enrollments: 0,
          rating: 0,
          revenue: 0,
          lastUpdated: '2024-07-22',
          progress: 65
        },
        {
          id: '5',
          title: 'Full Stack Project Workshop',
          thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
          status: 'under_review',
          enrollments: 0,
          rating: 0,
          revenue: 0,
          lastUpdated: '2024-07-20',
          progress: 90
        }
      ])

      setRecentActivities([
        {
          id: '1',
          type: 'enrollment',
          message: '15 new students enrolled in "Advanced React Patterns"',
          timestamp: '2 hours ago',
          icon: UserGroupIcon
        },
        {
          id: '2',
          type: 'review',
          message: 'New 5-star review on "Introduction to Web Development"',
          timestamp: '4 hours ago',
          icon: StarIcon
        },
        {
          id: '3',
          type: 'completion',
          message: '8 students completed "JavaScript Fundamentals"',
          timestamp: '1 day ago',
          icon: BookOpenIcon
        },
        {
          id: '4',
          type: 'question',
          message: '3 new questions in course discussions',
          timestamp: '2 days ago',
          icon: ChartBarIcon
        }
      ])

      setUpcomingTasks([
        {
          id: '1',
          task: 'Review and respond to student questions',
          course: 'Advanced React Patterns',
          dueDate: 'Today',
          priority: 'high'
        },
        {
          id: '2',
          task: 'Upload final module for Node.js course',
          course: 'Node.js Backend Development',
          dueDate: 'Tomorrow',
          priority: 'medium'
        },
        {
          id: '3',
          task: 'Grade assignments for Web Development',
          course: 'Introduction to Web Development',
          dueDate: 'In 3 days',
          priority: 'medium'
        },
        {
          id: '4',
          task: 'Create assessment for Full Stack Project',
          course: 'Full Stack Project Workshop',
          dueDate: 'Next week',
          priority: 'low'
        }
      ])

      setLoading(false)
    }, 1000)
  }, [])

  const getStatusBadge = (status) => {
    const statusConfig = {
      published: { color: 'bg-green-100 text-green-800', text: 'Published' },
      draft: { color: 'bg-gray-100 text-gray-800', text: 'Draft' },
      under_review: { color: 'bg-yellow-100 text-yellow-800', text: 'Under Review' }
    }

    const config = statusConfig[status] || statusConfig.draft

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    )
  }

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'text-red-600',
      medium: 'text-yellow-600',
      low: 'text-green-600'
    }
    return colors[priority] || colors.medium
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Instructor Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your courses and track your teaching progress</p>
          </div>
          <Link
            to="/instructor/courses/create"
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center space-x-2"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Create Course</span>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BookOpenIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Courses</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
              <p className="text-sm text-gray-600">{stats.coursesInProgress} in progress</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <UserGroupIcon className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalStudents?.toLocaleString()}</p>
              <p className="text-sm text-green-600">Across all courses</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ChartBarIcon className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue?.toLocaleString()}</p>
              <p className="text-sm text-purple-600">This month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <StarIcon className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Average Rating</p>
              <p className="text-2xl font-bold text-gray-900">{stats.averageRating}/5</p>
              <p className="text-sm text-yellow-600">From student reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">My Courses</h2>
          <Link to="/instructor/courses" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{course.title}</h3>
                  {getStatusBadge(course.status)}
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Students:</span>
                    <span className="font-medium">{course.enrollments}</span>
                  </div>
                  {course.rating > 0 && (
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <span className="font-medium flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        {course.rating}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Revenue:</span>
                    <span className="font-medium">${course.revenue?.toLocaleString()}</span>
                  </div>
                </div>

                {course.status === 'draft' && (
                  <div className="mt-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-500">
                    Updated {new Date(course.lastUpdated).toLocaleDateString()}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <Link 
                      to={`/instructor/courses/${course.id}/content`}
                      className="text-green-600 hover:text-green-800"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const IconComponent = activity.icon
              return (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Tasks</h2>
          <div className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <ClockIcon className={`h-5 w-5 ${getPriorityColor(task.priority)}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{task.task}</p>
                  <p className="text-xs text-gray-600">{task.course}</p>
                  <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorDashboard
