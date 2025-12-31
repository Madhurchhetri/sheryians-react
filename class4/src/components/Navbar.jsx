import React from 'react'

const Navbar = (props) => {
    console.log(props);
    
  return (
    <div style={{backgroundColor:props.color}} className='flex justify-between items-center gap-4 h-20 mb-10'>
        <h2>{props.title}</h2>
        <div className='flex gap-10'>
            {props.links.map((elem , idx)=>{
                return <h4 key={idx}>{elem}</h4>
            })}
        </div>
    </div>
  )
}

export default Navbar