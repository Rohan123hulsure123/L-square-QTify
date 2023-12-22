import React from 'react'
import "./FeedBackButton.css"
export default function FeedBackButton({text}) {
  return (
    <button className='feedback-button'>{text}</button>
  )
}
