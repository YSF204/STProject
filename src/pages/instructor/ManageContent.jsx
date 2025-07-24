import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentIcon,
  PlayIcon,
  ClipboardDocumentCheckIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const ManageContent = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [course, setCourse] = useState(null)
  const [expandedModules, setExpandedModules] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data - replace with actual API call
    setTimeout(() => {
      setCourse({
        id: id,
        title: 'Advanced React Patterns',
        description: 'Learn advanced React patterns and techniques for building scalable applications',
        status: 'published',
        enrollments: 189,
        modules: [
          {
            id: '1',
            title: 'Introduction to Advanced React',
            description: 'Overview of advanced React concepts and patterns',
            order: 1,
            lessons: [
              {
                id: '1',
                title: 'Course Overview',
                type: 'video',
                duration: '10:30',
                status: 'published',
                order: 1
              },
              {
                id: '2',
                title: 'Prerequisites Review',
                type: 'text',
                duration: '5 min read',
                status: 'published',
                order: 2
              },
              {
                id: '3',
                title: 'Setup Development Environment',
                type: 'video',
                duration: '15:45',
                status: 'published',
                order: 3
              }
            ]
          },
          {
            id: '2',
            title: 'Higher-Order Components',
            description: 'Understanding and implementing Higher-Order Components',
            order: 2,
            lessons: [
              {
                id: '4',
                title: 'What are HOCs?',
                type: 'video',
                duration: '12:20',
                status: 'published',
                order: 1
              },
              {
                id: '5',
                title: 'Creating Your First HOC',
                type: 'video',
                duration: '18:30',
                status: 'published',
                order: 2
              },
              {
                id: '6',
                title: 'HOC Best Practices',
                type: 'text',
                duration: '8 min read',
                status: 'draft',
                order: 3
              },
              {
                id: '7',
                title: 'HOC Exercise',
                type: 'assignment',
                duration: '45 min',
                status: 'published',
                order: 4
              }
            ]
          },
          {
            id: '3',
            title: 'Render Props Pattern',
            description: 'Master the render props pattern for component composition',
            order: 3,
            lessons: [
              {
                id: '8',
                title: 'Understanding Render Props',
                type: 'video',
                duration: '14:15',
                status: 'draft',
                order: 1
              },
              {
                id: '9',
                title: 'Implementing Render Props',
                type: 'video',
                duration: '20:00',
                status: 'draft',
                order: 2
              }
            ]
          }
        ]
      })
      setLoading(false)
    }, 1000)
  }, [id])

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }))
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return <PlayIcon className="h-4 w-4" />
      case 'text':
        return <DocumentIcon className="h-4 w-4" />
      case 'quiz':
        return <ClipboardDocumentCheckIcon className="h-4 w-4" />
      case 'assignment':
        return <BookOpenIcon className="h-4 w-4" />
      default:
        return <DocumentIcon className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      published: { color: 'bg-green-100 text-green-800', text: 'Published' },
      draft: { color: 'bg-gray-100 text-gray-800', text: 'Draft' },
      under_review: { color: 'bg-yellow-100 text-yellow-800', text: 'Review' }
    }

    const config = statusConfig[status] || statusConfig.draft

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    )
  }

  const handleDeleteLesson = (moduleId, lessonId) => {
    if (window.confirm('Are you sure you want to delete this lesson?')) {
      setCourse(prev => ({
        ...prev,
        modules: prev.modules.map(module =>
          module.id === moduleId
            ? {
                ...module,
                lessons: module.lessons.filter(lesson => lesson.id !== lessonId)
              }
            : module
        )
      }))
    }
  }

  const handleDeleteModule = (moduleId) => {
    if (window.confirm('Are you sure you want to delete this module and all its lessons?')) {
      setCourse(prev => ({
        ...prev,
        modules: prev.modules.filter(module => module.id !== moduleId)
      }))
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Course not found</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={() => navigate('/instructor')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-gray-600 mt-2">Manage course content and structure</p>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusBadge(course.status)}
            <span className="text-sm text-gray-500">{course.enrollments} students</span>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center space-x-2">
            <PlusIcon className="h-5 w-5" />
            <span>Add Module</span>
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
            <EyeIcon className="h-5 w-5" />
            <span>Preview Course</span>
          </button>
        </div>
      </div>

      {/* Course Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="text-2xl font-bold text-gray-900">{course.modules.length}</div>
          <div className="text-sm text-gray-500">Modules</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="text-2xl font-bold text-blue-600">
            {course.modules.reduce((total, module) => total + module.lessons.length, 0)}
          </div>
          <div className="text-sm text-gray-500">Total Lessons</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="text-2xl font-bold text-green-600">
            {course.modules.reduce((total, module) => 
              total + module.lessons.filter(lesson => lesson.status === 'published').length, 0
            )}
          </div>
          <div className="text-sm text-gray-500">Published</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="text-2xl font-bold text-yellow-600">
            {course.modules.reduce((total, module) => 
              total + module.lessons.filter(lesson => lesson.status === 'draft').length, 0
            )}
          </div>
          <div className="text-sm text-gray-500">Drafts</div>
        </div>
      </div>

      {/* Course Content */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Course Content</h2>
          <p className="text-gray-600 mt-1">Organize your course modules and lessons</p>
        </div>

        <div className="divide-y divide-gray-200">
          {course.modules.map((module) => (
            <div key={module.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {expandedModules[module.id] ? (
                      <ChevronDownIcon className="h-5 w-5" />
                    ) : (
                      <ChevronRightIcon className="h-5 w-5" />
                    )}
                  </button>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Module {module.order}: {module.title}
                    </h3>
                    <p className="text-sm text-gray-600">{module.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {module.lessons.length} lesson{module.lessons.length !== 1 ? 's' : ''}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteModule(module.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {(expandedModules[module.id] || Object.keys(expandedModules).length === 0) && (
                <div className="ml-8 space-y-3">
                  {module.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-gray-400">
                          {getTypeIcon(lesson.type)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{lesson.title}</span>
                            {getStatusBadge(lesson.status)}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="capitalize">{lesson.type}</span>
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteLesson(module.id, lesson.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 p-3 border-2 border-dashed border-gray-300 rounded-lg w-full justify-center">
                    <PlusIcon className="h-4 w-4" />
                    <span>Add Lesson</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {course.modules.length === 0 && (
          <div className="p-12 text-center">
            <BookOpenIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No modules yet</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating your first module.</p>
            <div className="mt-6">
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center space-x-2 mx-auto">
                <PlusIcon className="h-5 w-5" />
                <span>Create Module</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <PlusIcon className="h-6 w-6 text-blue-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Add Video Lesson</div>
              <div className="text-sm text-gray-500">Upload and add a new video</div>
            </div>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ClipboardDocumentCheckIcon className="h-6 w-6 text-green-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Create Quiz</div>
              <div className="text-sm text-gray-500">Add interactive quiz</div>
            </div>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <BookOpenIcon className="h-6 w-6 text-purple-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Add Assignment</div>
              <div className="text-sm text-gray-500">Create homework task</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ManageContent
