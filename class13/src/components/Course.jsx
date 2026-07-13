import React from 'react'

const Course = (props) => {
    const data = props.courseData
    console.log(data);
    
    
  return (
    <div>
        {/* <h1>{data}</h1> */}
        <h1>hii {data.courseData}</h1>
    </div>
  )
}

export default Course