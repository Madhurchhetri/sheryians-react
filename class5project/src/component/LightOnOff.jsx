import React, { useRef, useState } from 'react'

const LightOnOff = () => {
    const [color, setColor] = useState("black")
    const imgRef = useRef(null)
    let switchOn = ()=>{
        if(color==="black"){
            setColor("white")
        }
        
    }
    let switchOff = ()=>{
        if(color==="white")
        setColor("black")
    }
    let handleMove = (dets)=>{
        const img = imgRef.current;
        img.style.left = `${dets.clientX}px`
        img.style.top = `${dets.clientY}px`
        img.style.transform = "translate(-50%, -20% )"
    }
    
  return (
    <div onMouseMove={handleMove}  className={` flex flex-row justify-center items-center h-screen  ${color==="black"?"black":"white"}`}>
    <h1 className='text-black text-center capitalize'>usestate class day 1</h1>
    <div className=' flex justify-center items-center gap-7'>
        
        <div className="men" >
            <img  ref={imgRef} className='nobi' src="../../public/nobi1.png" alt="image1" />
        </div>
        <button onClick={switchOn} className=' bg-emerald-600 w-fit px-2 py-2 rounded'>
            on
        </button>
        <button onClick={switchOff} className=' bg-emerald-600 w-fit px-2 py-2 rounded'>
            off
        </button>
    </div>
    </div>
  )
}

export default LightOnOff