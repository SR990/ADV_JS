import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import MyLearningPage from './pages/MyLearningPage'
import CourseDetailPage from './components/CourseDetailPage'
import Footer from './components/Footer'  // Import the Footer component

function App() {
  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="text-xl font-semibold text-blue-600">My Learning</div>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
          >
            Courses
          </Link>
          <Link
            to="/my-learning"
            className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
          >
            My Learning
          </Link>
        </div>
      </nav>

      <div className="p-6 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/my-learning" element={<MyLearningPage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
        </Routes>
      </div>

      <Footer /> {/* Add the Footer component here */}
    </>
  )
}

export default App
