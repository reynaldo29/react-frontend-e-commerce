import React from 'react'
import "./categoryItem.css"

const CategoryItem = ({item}) => {
  return (
    <div className='container5'>
        <img src={item.img} alt=""  className='Image'/>
        <div className='info'>
            <h1 className='Title'>{item.title}</h1>
            <button className='Buttom'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem