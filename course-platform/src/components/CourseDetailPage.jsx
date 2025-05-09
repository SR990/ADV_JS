import {useParams} from 'react-router-dom'
import useCourses from '../hooks/useCourses'
import {useDispatch} from 'react-redux'
import { enrollCourse } from '../redux/myLearningSlice'
function CourseDetailPage(){

    const {id} = useParams()
    const{data, isLoading, error} =  useCourses()
    const course = data?.find((course) => course.id == id)

    const dispatch = useDispatch()

    if (isLoading) return <p>Loading course details...</p>
  if (error) return <p>Error fetching course details</p>
  if (!course) return <p>Course not found</p>


  const handleEnroll = () => {
    dispatch(enrollCourse(course))
  }

    return (
<div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl transition-transform hover:scale-[1.01] duration-300">
  <h2 className="text-center text-4xl font-extrabold text-blue-800 mb-4">{course.title}</h2>
  
  <img
  src={course.thumbnail}
  alt={course.title}
  className="mx-auto w-full h-auto max-w-md rounded-xl shadow-md mb-6 border-2 border-blue-200"
/>


  <p className="text-lg text-gray-700 leading-relaxed mb-4">{course.description}</p>
  <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed mb-4">
  <span className="text-blue-600 font-semibold">Instructor:</span> {course.instructor}
</p>


  <div className="flex items-center gap-4 mb-4">
    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
      Level: {course.level}
    </span>
    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
      Category: {course.category}
    </span>
    <span className="text-lg font-semibold">
  Modules :   
  <select className="bg-white border border-gray-300 rounded-md p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
    {course.modules.map((module, id) => (
      <option key={id} value={module.title} className="p-2">
        {module.title}: {module.lesson}
      </option>
    ))}
  </select>
</span>


  </div>

  <p className="text-2xl font-bold text-green-600 mt-4">
    ₹{course.price.toLocaleString('en-IN')}
  </p>

  <button onClick={handleEnroll} className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition hover:scale-105">
    Enroll Now
  </button>
</div>

      
        
    )
}

export default CourseDetailPage