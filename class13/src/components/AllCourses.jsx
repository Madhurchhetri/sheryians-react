import React from 'react'
import Course from './Course'

const AllCourses = (props) => {
    // console.log(props.courseData);
    
  return (
    <div>
        <Course courseData ={props.courseData} />
    </div>
  )
}

export default AllCourses