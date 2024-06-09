import React from "react"
import {useState} from 'react';
import Card from './Card';
const Cards = (props) =>{
  const courses = props.courses
  const Category= props.Category
  const [likedCourses, setlikedCourses] = useState([]);

  function getCourses(){
    if(Category === "All")
      {
        let allCourses = [];
        Object.values(courses).forEach(array=>{
            array.forEach(courseData =>{
                allCourses.push(courseData);
            })
        })
        return allCourses
      }
      else
      {
        return courses[Category];
      }
      }
      return(
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course)=>(
                <Card key={course.id} course={course} likedCourses={likedCourses}
                setlikedCourses={setlikedCourses}></Card>
            ))
        }
    </div>
  )
}
export default Cards;