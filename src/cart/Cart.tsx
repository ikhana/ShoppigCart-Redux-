import { Button } from "@mui/material";
import { useAppSelector } from "../Store.hooks";
import { getcartCourses, getTotalPrice,removefromCart } from "./Cart.slice";
import { useAppDispatch } from "../store";
 
const Cart = () => {
    const cartCourses = useAppSelector(getcartCourses);
    const totalPrice = useAppSelector(getTotalPrice);
    const dispatch = useAppDispatch();
    const removeCartHandler = (id: string) => dispatch(removefromCart(id))
    return (<>
  <h2>Cart</h2>
  <span>Total amount PKR: {totalPrice}</span>
  {cartCourses.map(course => 
    <div key={course.id}>
      <h5>{course.title}</h5>
      <span>{course.coursePrice}</span>
      <Button onClick={() => removeCartHandler(course.id)}>Remove from cart</Button>
    </div>
  )}
    </>  );
}
 
export default Cart;