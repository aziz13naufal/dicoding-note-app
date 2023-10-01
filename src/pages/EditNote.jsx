import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom'


const EditNote = ({ notes, setNotes }) => {
  const {id} = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const date = +new Date();

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if(title && body) {
      const newNote = {
        ...note, 
        title, 
        body,
        date
      }

      const newNotes = notes.map(item => {
        if(item.id == id) {
          item = newNote;
        }
        return item;
      })

      setNotes(newNotes);
    }

    navigate('/');
  }

  const handleDelete = () => {
    const newNotes = notes.filter(item => item.id != id);

    setNotes(newNotes);
    navigate('/')
  }

  return (
    <section className='p-4'>
      <header className='flex gap-4'>
        <Link to={'/'} className='btn btn-primary'>Back</Link>
        <button className='btn btn-success' onClick={handleForm}>Save</button>
        <button className='btn btn-error' onClick={handleDelete}>Delete</button>
      </header>
      <form className='flex flex-col gap-4 mt-7' onSubmit={handleForm}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title..' className='p-4 rounded-lg bg-neutral' />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} cols="30" rows="10" placeholder='write here..' className='p-4 rounded-lg bg-neutral'></textarea>
      </form>
    </section>
  )
}

export default EditNote
