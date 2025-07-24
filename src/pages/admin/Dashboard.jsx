import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChartBarIcon,
  UserGroupIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);
  const [systemAlerts, setSystemAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API calls
    setTimeout(() => {
      setStats({
        totalUsers: 2847,
        totalCourses: 156,
        activeInstructors: 42,
        totalRevenue: 89750,
        newUsersThisMonth: 234,
        coursesCompletedThisMonth: 1456,
      });

      setRecentActivities([
        {
          id: "1",
          type: "user_registration",
          message: "New user registered: sarah.johnson@email.com",
          timestamp: "2 minutes ago",
          icon: UserGroupIcon,
        },
        {
          id: "2",
          type: "course_published",
          message:
            'Course "Advanced Python Programming" published by Dr. Smith',
          timestamp: "15 minutes ago",
          icon: BookOpenIcon,
        },
        {
          id: "3",
          type: "instructor_application",
          message: "New instructor application from Michael Chen",
          timestamp: "1 hour ago",
          icon: AcademicCapIcon,
        },
        {
          id: "4",
          type: "course_completion",
          message: '25 students completed "Web Development Basics"',
          timestamp: "2 hours ago",
          icon: TrendingUpIcon,
        },
      ]);

      setSystemAlerts([
        {
          id: "1",
          type: "warning",
          message: "Server load is above 80% - consider scaling",
          timestamp: "30 minutes ago",
        },
        {
          id: "2",
          type: "info",
          message: "Scheduled maintenance window: Sunday 2:00 AM - 4:00 AM",
          timestamp: "2 hours ago",
        },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening on your platform.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <UserGroupIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalUsers?.toLocaleString()}
              </p>
              <p className="text-sm text-green-600">
                +{stats.newUsersThisMonth} this month
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BookOpenIcon className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Courses</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalCourses}
              </p>
              <p className="text-sm text-blue-600">
                {stats.coursesCompletedThisMonth} completed this month
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <AcademicCapIcon className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Active Instructors
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.activeInstructors}
              </p>
              <p className="text-sm text-gray-500">Teaching courses</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ChartBarIcon className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ${stats.totalRevenue?.toLocaleString()}
              </p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin/users"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <UserGroupIcon className="h-6 w-6 text-blue-600 mr-3" />
            <span className="font-medium text-gray-900">Manage Users</span>
          </Link>
          <Link
            to="/admin/courses"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <BookOpenIcon className="h-6 w-6 text-green-600 mr-3" />
            <span className="font-medium text-gray-900">Manage Courses</span>
          </Link>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ChartBarIcon className="h-6 w-6 text-purple-600 mr-3" />
            <span className="font-medium text-gray-900">View Analytics</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            System Alerts
          </h2>
          <div className="space-y-4">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <ExclamationTriangleIcon
                    className={`h-5 w-5 ${
                      alert.type === "warning"
                        ? "text-yellow-500"
                        : "text-blue-500"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
