import React from 'react'
import './styles/HeroCompsDescriptions.scss'

function HeroCompsDescriptions({ title, description }) {
  return (
    <li>
      <h5>{title}</h5>
      <p>{description}</p>
    </li>
  )
}

export default HeroCompsDescriptions