import React from 'react'

import * as FaIcons from 'react-icons/fa'

import './buttonTop.css'
import './script.jsx'

const ButtonTop: React.FC = () => {
  return (
    <button id="toTopButton" className="mr-4">
      <FaIcons.FaAngleUp />
    </button>
  )
}

export default ButtonTop
