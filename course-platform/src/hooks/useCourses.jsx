import {useQuery} from '@tanstack/react-query'
import courses from '../data/courses.json'


const fetchCourses = async () => {
    return courses
  }
  

function useCourses(){
    return useQuery({
        queryKey:['courses'],
        queryFn: fetchCourses 
        
    })


}
export default useCourses