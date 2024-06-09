import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify"; 
const Card = (props) =>{
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setlikedCourses = props.setlikedCourses;

  function clickHandler()
  {
    if(likedCourses.includes(course.id))
      {
        setlikedCourses((prev) => prev.filter((cid) =>(cid !== course.id)));
        toast.warning("like removed");
      }
      else
      {
        if(likedCourses.length === 0)
          {
            setlikedCourses([course.id]);
          }
          else
          {
            setlikedCourses((prev) => [...prev ,course.id]);
          }
          toast.success("liked successfully");
      }
  }
    return(
        <div className="w-[300px] bg-slate-900 text-white rounded-md  overflow-hidden">
          <div className="relative ">
            <img src={course.image.url} alt="img"></img>
          <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
            <button onClick={clickHandler}>
              {
                likedCourses.includes(course.id) ?
                (<FcLike fontSize="1.75rem"></FcLike>) :
                (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>)
              }
            </button>
          </div>
          </div>
          <div className="p-4">
            <p className=" font-semibold text-lg leading-6">{course.title}</p>
            <p className="mt-2">
              {course.description.length > 100 ? (course.description.substr(0,100))+"...":(course.description)}
            </p>  
          </div>
        </div>
    )
}
export default Card