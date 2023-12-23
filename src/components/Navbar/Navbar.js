import React from 'react'
import './Navbar.css'
import FeedBackButton from '../FeedBackButton/FeedBackButton'
import SearchBar from '../SearchBar/SearchBar'

export default function Navbar() {
  return (
    <nav className='navbarContainer'>
        <a href='/'>
          <img src="./Group 1.png" alt='logo' className='logo'/>
        </a>
        <SearchBar />
        <FeedBackButton text={"Give Feedback"}/>
    </nav>
  )
}
