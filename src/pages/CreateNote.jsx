import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'


const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const date = +new Date();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && body) {
      const note = {
        id: uuid(),
        title,
        body,
        archieved: false,
        createdAt: date
      }
      // add this note to the Notes
      setNotes(prevNotes => [note, ...prevNotes]);
      navigate('/')

      return;
    }

    console.log('masukan judul atau catatan..')

  }

  return (
    <section className='p-4'>
      <header className='flex gap-4'>
        <Link to={'/'} className='btn btn-primary'>Home</Link>
        <button className='btn btn-success' onClick={handleSubmit}>Save</button>
      </header>
      <form className='flex flex-col gap-4 mt-7' onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title..' className='p-4 rounded-lg bg-neutral' />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} cols="30" rows="10" placeholder='write here..' className='p-4 rounded-lg bg-neutral'></textarea>
      </form>
    </section>
  )
}

export default CreateNote
