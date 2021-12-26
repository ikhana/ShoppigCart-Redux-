import { Course } from "./products/Product.slice";

const validateCourse = (course: Course): Promise<Course> => new Promise ((resolve, reject) => setTimeout(() =>{
    if(course.title.length === 0){
        reject('There must be a title')
    }
    if(course.coursePrice === 0 ){
        reject('Course Price can not be zaero')
    }
    resolve(course)
},500))


export default validateCourse;