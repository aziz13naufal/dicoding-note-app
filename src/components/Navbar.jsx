import React from 'react'

export default function Navbar() {
  return (
    <div>
        <Link to ={'/'}>Home</Link>
        <Link to ={'/create-note'}>Home</Link>
        <Link to ={'/edit-note/:id'}>Home</Link>
    </div>
  )
}
