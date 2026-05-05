import React from 'react'

const card = ({name,bio,img,changename}) => {
  return (
    <div id='profile-card'>
      <img id='profile-image' src={img} alt='Profile' />
      <h2 id='profile-name'>{name}</h2>
      <p id='profile-bio'>{bio}</p>
      <button onClick={changename}>Follow</button>
    </div>
  )
}

export default card
