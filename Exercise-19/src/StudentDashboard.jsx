import { useState } from 'react';

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'courses', label: 'Courses' },
    { value: 'assignments', label: 'Assignments' },
  ];

  const courses = [
    {
      id: 1,
      name: 'React Fundamentals',
      progress: 75,
      instructor: 'Sarah Wilson',
      nextLesson: 'Components & Props',
      gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    },
    {
      id: 2,
      name: 'JavaScript Advanced',
      progress: 45,
      instructor: 'Mike Johnson',
      nextLesson: 'Async/Await',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    },
    {
      id: 3,
      name: 'UI/UX Design',
      progress: 90,
      instructor: 'Emily Chen',
      nextLesson: 'Color Theory',
      gradient: 'linear-gradient(135deg, #f97316, #ec4899)',
    },
  ];

  const assignments = [
    { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
    { id: 2, title: 'API Integration', course: 'JavaScript Advanced', dueDate: '2024-03-18', status: 'completed' },
    { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'in-progress' },
  ];

  const announcements = [
    { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
    { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
  ];

  const stats = [
    { label: 'Average Grade', value: '88%', icon: '📊' },
    { label: 'Courses', value: '3', icon: '📚' },
    { label: 'Study Hours', value: '45h', icon: '⏰' },
    { label: 'Assignments', value: '12', icon: '✍️' },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(30,41,59,0.98),_rgba(15,23,42,0.98)_52%,_rgba(2,6,23,1)_100%)] py-8 px-4 text-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-[0_20px_45px_-20px_rgba(37,99,235,0.45)] p-6 mb-6 border border-slate-700/80 ring-1 ring-white/5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Welcome back, Student!</h1>
              <p className="text-slate-300">Here's what's happening with your courses today.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  🔔
                </button>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold">
                S
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-900/75 backdrop-blur-sm rounded-xl shadow-[0_14px_35px_-18px_rgba(59,130,246,0.7)] p-6 border border-slate-700/80 transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex items-center">
                <div className="text-2xl mr-4">{stat.icon}</div>
                <div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Course Progress Section */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/75 backdrop-blur-sm rounded-xl shadow-[0_16px_40px_-20px_rgba(59,130,246,0.75)] p-6 border border-slate-700/80">
              <h2 className="text-lg font-semibold text-white mb-4">Course Progress</h2>
              <div className="space-y-4">
                {courses.map(course => (
                  <div
                    key={course.id}
                    className="rounded-2xl p-4 shadow-[0_14px_30px_-18px_rgba(15,23,42,0.95)] border border-white/10 transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ background: course.gradient }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-white">{course.name}</h3>
                      <span className="text-sm text-slate-200">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-2.5 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${course.progress}%`, background: course.gradient }}
                      ></div>
                    </div>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-slate-200">Next: {course.nextLesson}</span>
                      <span className="text-slate-200">{course.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Upcoming Assignments */}
            <div className="bg-slate-900/75 backdrop-blur-sm rounded-xl shadow-[0_16px_40px_-20px_rgba(59,130,246,0.75)] p-6 border border-slate-700/80">
              <h2 className="text-lg font-semibold text-white mb-4">Upcoming Assignments</h2>
              <div className="space-y-4">
                {assignments.map(assignment => (
                  <div key={assignment.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">{assignment.title}</h3>
                      <p className="text-sm text-slate-300">{assignment.course}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                          assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                        {assignment.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">Due {assignment.dueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-slate-900/75 backdrop-blur-sm rounded-xl shadow-[0_16px_40px_-20px_rgba(59,130,246,0.75)] p-6 border border-slate-700/80">
              <h2 className="text-lg font-semibold text-white mb-4">Announcements</h2>
              <div className="space-y-4">
                {announcements.map(announcement => (
                  <div key={announcement.id} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-white">{announcement.title}</h3>
                    <p className="text-sm text-slate-300 mt-1">{announcement.message}</p>
                    <p className="text-xs text-slate-400 mt-1">{announcement.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard; 