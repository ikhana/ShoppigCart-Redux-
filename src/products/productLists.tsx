import {FunctionComponent} from "react"
import { useSelector } from "react-redux";
import { getCoursesSelector, removeCourse } from "./Product.slice";
import { Course } from "./Product.slice";
import {useAppDispatch} from '../store'
import { addToCart } from "../cart/Cart.slice";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ProductList: FunctionComponent<Course> = () =>{

    const dispatch = useAppDispatch();

    const removeCourseFromStore = (id: string) => dispatch(removeCourse(id));
    const addToCartHandler = (course: Course) => dispatch(addToCart(course));
    //const removeCartHandler = (id: string) => dispatch(removefromCart(id))
    
    
    const courses = useSelector(getCoursesSelector);
    
      return (
    <div >
        <h2>List of Courses from PIAIC</h2>
    {courses.map(course => <div key={course.id}>
        <span>  {course.teacher}</span>
        <Stack direction="row" spacing={20}>
        <IconButton aria-label="delete">
        <DeleteIcon onClick={() => removeCourseFromStore(course.id)} />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart" onClick={() => addToCartHandler(course)}>
        <AddShoppingCartIcon />
        </IconButton>
        </Stack>
        
        
    </div>)}
     
    
    </div>
  );
}
 
export default ProductList;
