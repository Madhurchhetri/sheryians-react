import React from 'react'

const Card2 = (props) => {
  return (
    <div className=' bg-white p-2 border-2 border-red-500 rounded  '>
        <h1 className='text-2xl text-black text-center'>{props.name}</h1>
    </div>
  )
}

export default Card2