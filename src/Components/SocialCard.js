import React from 'react'

const SocialCard = ({link, icon}) => {
  return (
    < >
      <a className='pe-2 ' target='blank' href={link}>{icon} </a>
    </>
  )
}

export default SocialCard
