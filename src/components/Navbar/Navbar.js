import React from 'react'
import './Navbar.css'
import FeedBackButton from '../FeedBackButton/FeedBackButton'
import SearchBar from '../SearchBar/SearchBar'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src="./Group 1.png" alt='logo' className='logo'/>
        <SearchBar />
        <FeedBackButton text={"Give Feedback"}/>
    </div>
  )
}
