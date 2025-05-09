import { Link } from "react-router-dom"
import useCourses from "../hooks/useCourses"

function CoursesPage() {

  const{data, isLoading, error} =  useCourses()

  if(isLoading){
    return <h2>Loading</h2>
  }

  if(error){
    return <h2>Error Fetching Courses</h2>
  }
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Available Courses</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((course) => {
          return (
            <div key={course.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
              <Link to={`/courses/${course.id}`} >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="font-semibold text-gray-900">Price: ${course.price}</p>
             </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
  
    
  }
  export default CoursesPage
  