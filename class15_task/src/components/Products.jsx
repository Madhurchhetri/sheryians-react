import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {
    const {productData} = useContext(ProductDataContext)
  return (
    <div>
        {
            productData.map((elem,idx)=>{
                return <div key={idx}>
                    <h2>{elem.title}</h2>
                    <p>{elem.description}</p>
                    <img src={elem.image} alt={elem.title} />
                    
                    <Link className='px-[20px] py-[10px] bg-yellow-400 text-white font-bold rounded ' to={`/products/${elem.id}`}>
                        Detail
                    </Link>
                   
                </div>
            })
        }
    </div>
  )
}

export default Products