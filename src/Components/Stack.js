import React from 'react'

const Stack = ({name, image}) => {
  return (
    <>
      <img src={image} alt="" />
      <p className='text-light'>{name}</p>
    </>
    
  )
}

export default Stack
