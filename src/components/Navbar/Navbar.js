import React from 'react'
import './Navbar.css'
import FeedBackButton from '../FeedBackButton/FeedBackButton'
import SearchBar from '../SearchBar/SearchBar'

export default function Navbar() {
  return (
    <div>
        <SearchBar />
        <br/>
        <FeedBackButton />
    </div>
  )
}
