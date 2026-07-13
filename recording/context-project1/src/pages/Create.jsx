import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const{data, setData} = useContext(recipeContext);
    const {register, handleSubmit ,reset} = useForm()
    const navigate = useNavigate()

    const submitHandler=(recipeData)=>{
        recipeData.id = nanoid();
        setData([...data, recipeData]);
        reset();
        navigate('/recipes');
    }
  return (
    <>
        <form onSubmit={handleSubmit(submitHandler)}>
            <input
            className='block border-b outline-0 p-2'
            {...register("title")}
             type="text" placeholder='Enter Recipe Name' />
             <input
            className='block border-b outline-0 p-2'
            {...register("image")}
             type="url" placeholder='Enter image url' />
             <small className='text-red-400'> this is the error is shown</small>
              <input
            className='block border-b outline-0 p-2'
            {...register("chefName")}
             type="text" placeholder='Enter Chef Name' />
              <textarea
              className='block border-b outline-0 p-2'
              {...register("description")}
              placeholder='start from here'
              >
              </textarea>
              <textarea
              className='block border-b outline-0 p-2'
              {...register("ingredients")}
              placeholder='write ingredients seperated by comma'
              >
              </textarea>
               <textarea
              className='block border-b outline-0 p-2'
              {...register("instructions")}
              placeholder='write instructions seperated by comma'
              >
              </textarea>
              <select
              className='block border-b outline-0 p-2 bg-gray-800'
              {...register("category")}
              >
                <option value="">Select a category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>

              <button className=' block bg-gray-900 px-4 py-2 rounded mt-3' type='submit'>Save Recipe</button>
             
        </form>
    </>
  )
}

export default Create