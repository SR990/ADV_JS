import { useSelector } from "react-redux"

function MyLearningPage() {
  const enrolledCourses = useSelector((state => state.myLearning.enrolledCourses)) 
   
   
   return ( 
   
    <div className="p-8">
    <h2 className="text-3xl font-bold mb-6">My Learning</h2>
    {enrolledCourses.length === 0 ? (
      <p className="text-lg text-gray-500">You haven't enrolled in any courses yet.</p>
    ) : (
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id} className="mb-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">{course.title}</h3>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <p className="mt-2">
              <strong className="text-gray-700">Level:</strong> {course.level}
            </p>
          </li>
        ))}
      </ul>
    )}
  </div>
   )
  
  }
  export default MyLearningPage
  