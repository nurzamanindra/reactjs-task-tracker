import React from 'react'

import './Tag.css'
const Tag = ({tagName, selectTag, selected}) => {

  const tagStyle = {
    HTML : {backgroundColor: "pink"},
    CSS : {backgroundColor: "lightblue"},
    JavaScript : {backgroundColor: "magenta"},
    ReactJs : {backgroundColor: "lightgreen"},
    default: {backgroundColor: "whitesmoke"}
  }

  return (
    <button 
    style={selected ? tagStyle[tagName] : tagStyle.default}
    type='button' className='tag' onClick={() => selectTag(tagName)}>{tagName}</button>
  )
}

export default Tag