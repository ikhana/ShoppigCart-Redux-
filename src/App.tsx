import { Provider } from 'react-redux';
import './App.css';
import Cart from './cart/Cart';
import ProductForm from './products/ProductForm';
import ProductList from './products/productLists';
import {store} from './store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <ProductList title=''teacher='' durationInMonths='' id='' coursePrice={0}/>
    <br />
    <ProductForm/>
    <br />
    <Cart/>
    </div>
    </Provider>
  );
}

export default App;

/*import { useState } from "react";

interface CourseListsProps  {
    title: "string",
    teacher: "string",
    durationInMonths: number,
    id: "string"



}

const intialCourses = [
    {title:"Blockchain", teacher:"Zeeshan Hanif", durationInMonths: 12, id: "bcc"},
    {title:"Artificial Inteligence", teacher:"Inaam ul Haq", durationInMonths: 12, id: "AI"},
    {title:"Cloud Computing", teacher:"Mohsin Khalid", durationInMonths: 12, id: "CC"},
    {title:"Internet Of Things", teacher:"Zia Khan", durationInMonths: 18, id: "IoT"},
]

/function ProductList() {
    const [course, setCourse]= useState(intialCourses);
    console.log(course)
  return (
    <div >
        <h2>List of Courses from PIAIC</h2>
    {course.map(course => <div key={course.id}>
        <span>{course.teacher}</span>
    </div>
        
    )}
    <button onClick={() =>setCourse(newCourse =>[{
        title: "5G",
        teacher: "Daniyal Nagori",
        durationInMonths: 4,
        id: "5G"
    }, ...newCourse])}>Add courses </button>
    </div>
  );
}

export default ProductList;*/
