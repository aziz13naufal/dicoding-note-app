import React from 'react'
import { Link } from 'react-router-dom'
import { showFormattedDate } from '../initialData'

const NoteItem = ({ note }) => {
  return (
    <div className='w-fit bg-success p-4 rounded-md'>
      <Link to ={`/edit-note/${note.id}`}>
        <h1 className='text-lg font-semibold'>{note.title.length > 50 ? (note.title.substr(0, 50)) + "..." : note.title}</h1>
        <p className='mt-3 text-sm'>{showFormattedDate(note.createdAt)}</p>
      </Link>
    </div>
  )
}

export default NoteItem
