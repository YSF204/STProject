import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  PhotoIcon,
  DocumentIcon,
  PlusIcon,
  TrashIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'

const CreateCourse = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    level: 'beginner',
    price: '',
    thumbnail: null,
    prerequisites: [''],
    learningObjectives: [''],
    modules: [
      {
        id: 1,
        title: '',
        description: '',
        lessons: [
          {
            id: 1,
            title: '',
            type: 'video',
            duration: ''
          }
        ]
      }
    ]
  })
  const [loading, setLoading] = useState(false)

  const categories = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'Backend Development',
    'Frontend Development',
    'DevOps',
    'Cybersecurity',
    'UI/UX Design',
    'Database',
    'Cloud Computing',
    'Programming Languages'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        thumbnail: file
      }))
    }
  }

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
  }

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const handleModuleChange = (moduleIndex, field, value) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.map((module, i) => 
        i === moduleIndex ? { ...module, [field]: value } : module
      )
    }))
  }

  const handleLessonChange = (moduleIndex, lessonIndex, field, value) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.map((module, i) => 
        i === moduleIndex ? {
          ...module,
          lessons: module.lessons.map((lesson, j) => 
            j === lessonIndex ? { ...lesson, [field]: value } : lesson
          )
        } : module
      )
    }))
  }

  const addModule = () => {
    const newModule = {
      id: Date.now(),
      title: '',
      description: '',
      lessons: [
        {
          id: Date.now(),
          title: '',
          type: 'video',
          duration: ''
        }
      ]
    }
    setFormData(prev => ({
      ...prev,
      modules: [...prev.modules, newModule]
    }))
  }

  const removeModule = (moduleIndex) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.filter((_, i) => i !== moduleIndex)
    }))
  }

  const addLesson = (moduleIndex) => {
    const newLesson = {
      id: Date.now(),
      title: '',
      type: 'video',
      duration: ''
    }
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.map((module, i) => 
        i === moduleIndex ? {
          ...module,
          lessons: [...module.lessons, newLesson]
        } : module
      )
    }))
  }

  const removeLesson = (moduleIndex, lessonIndex) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.map((module, i) => 
        i === moduleIndex ? {
          ...module,
          lessons: module.lessons.filter((_, j) => j !== lessonIndex)
        } : module
      )
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // This would be replaced with actual API call
      // const response = await api.post('/instructor/courses', formData)
      
      // Mock success
      setTimeout(() => {
        alert('Course created successfully!')
        navigate('/instructor')
      }, 2000)
    } catch (error) {
      console.error('Error creating course:', error)
      alert('Failed to create course. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/instructor')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Course</h1>
            <p className="text-gray-600 mt-2">Fill in the details to create your course</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter course title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level *
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Thumbnail
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <label className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Upload a thumbnail
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                    />
                  </label>
                </div>
                {formData.thumbnail && (
                  <p className="mt-2 text-sm text-gray-500">{formData.thumbnail.name}</p>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Describe your course..."
              />
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
          
          {formData.prerequisites.map((prerequisite, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={prerequisite}
                onChange={(e) => handleArrayChange('prerequisites', index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter prerequisite"
              />
              {formData.prerequisites.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('prerequisites', index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
          
          <button
            type="button"
            onClick={() => addArrayItem('prerequisites')}
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <PlusIcon className="h-4 w-4" />
            <span>Add Prerequisite</span>
          </button>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Objectives</h2>
          
          {formData.learningObjectives.map((objective, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={objective}
                onChange={(e) => handleArrayChange('learningObjectives', index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="What will students learn?"
              />
              {formData.learningObjectives.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('learningObjectives', index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
          
          <button
            type="button"
            onClick={() => addArrayItem('learningObjectives')}
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <PlusIcon className="h-4 w-4" />
            <span>Add Learning Objective</span>
          </button>
        </div>

        {/* Course Modules */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Course Modules</h2>
            <button
              type="button"
              onClick={addModule}
              className="flex items-center space-x-2 bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700"
            >
              <PlusIcon className="h-4 w-4" />
              <span>Add Module</span>
            </button>
          </div>

          {formData.modules.map((module, moduleIndex) => (
            <div key={module.id} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Module {moduleIndex + 1}</h3>
                {formData.modules.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeModule(moduleIndex)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={module.title}
                  onChange={(e) => handleModuleChange(moduleIndex, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Module title"
                />

                <textarea
                  value={module.description}
                  onChange={(e) => handleModuleChange(moduleIndex, 'description', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Module description"
                />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-700">Lessons</h4>
                    <button
                      type="button"
                      onClick={() => addLesson(moduleIndex)}
                      className="text-primary-600 hover:text-primary-700 text-sm"
                    >
                      + Add Lesson
                    </button>
                  </div>

                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lesson.id} className="flex items-center space-x-2 bg-gray-50 p-3 rounded">
                      <input
                        type="text"
                        value={lesson.title}
                        onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'title', e.target.value)}
                        className="flex-1 px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Lesson title"
                      />
                      <select
                        value={lesson.type}
                        onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'type', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="video">Video</option>
                        <option value="text">Text</option>
                        <option value="quiz">Quiz</option>
                        <option value="assignment">Assignment</option>
                      </select>
                      <input
                        type="text"
                        value={lesson.duration}
                        onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'duration', e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Duration"
                      />
                      {module.lessons.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeLesson(moduleIndex, lessonIndex)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/instructor')}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Course'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateCourse
