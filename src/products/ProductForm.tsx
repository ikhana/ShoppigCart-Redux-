
import InputLabel from'@mui/material/InputLabel';
import Input from '@mui/material/Input'
import {Button, FormGroup} from '@mui/material';
import Box from '@mui/material/Box';
import { addCourseAsync, Course, getErrorMessage } from './Product.slice'; 
import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { useSelector } from 'react-redux';



 
const ProductForm: React.FC = () => {
    const [course, setCourse] = useState<Course>({
    title: '',
    teacher: '',
    durationInMonths:'',
    coursePrice:0,
    id: ''
    
    })
    const errorMessage = useSelector(getErrorMessage)
    const dispatch = useAppDispatch();
    const handleChange = ({target:{name, value}}: React.ChangeEvent<HTMLInputElement>) => setCourse(pre =>{(pre as any) 
        [name] = value;

        const newValue = {...pre};
        return newValue;
    });

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        dispatch(addCourseAsync(course))
        console.log({course})
    }

    const {title, teacher, durationInMonths, id,coursePrice} = course;

  
    return ( 
        <>
        {errorMessage && <span>error: {errorMessage}</span>}
       <FormGroup onSubmit={handleSubmit}>
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <InputLabel htmlFor="CT" id="standard-multiline-flexible"
         variant="standard"
          color='primary'>Add Your course</InputLabel>
      <br />
      <br />
      <br />
      <Input id="CT" type='text' placeholder='Course title' name='title'  value={title} onChange={handleChange}
      style={{border: errorMessage ? '1px solid red': '1px solid black'}}/> 
      <Input id="TN" type='text' placeholder='Teacher name' name='teacher'  value={teacher} onChange={handleChange}
      style={{border: errorMessage ? '1px solid red': '1px solid black'}}/>
      <Input id="DIN" type='text'  placeholder='Duration in months'name='durationInMonths'  value={durationInMonths} onChange={handleChange}
      style={{border: errorMessage ? '1px solid red': '1px solid black'}}/>
      <Input id="CP" type='text'  placeholder='Course Price'name='coursePrice'  value={coursePrice} onChange={handleChange}
      style={{border: errorMessage ? '1px solid red': '1px solid black'}}/>
      <Input id="ID" type='text' placeholder='Id' name='id' value={id} onChange={handleChange} />
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Button type='submit' 
      style={{backgroundColor: errorMessage ? '1px solid red': '1px solid #f2f5f9'}}>Add Course</Button>
      </Box>
      </Box>
      </FormGroup>
      </>
     );
}
 
export default ProductForm;