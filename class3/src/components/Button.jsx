import React from 'react'

const  Button = (props) => {
  return (
    <div className='bg-emerald-600 capitalize text-white py-2 px-2  m-1 font-bold text-lg rounded w-fit' >
        {props.title}
    </div>
  )
}

export default  Button