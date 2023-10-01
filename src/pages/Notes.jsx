import React from 'react'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'

const Notes = ({ notes, noData }) => {

    return (
        <div className='p-4'>
            <Link to={'/create-note'} className='btn btn-primary' >add note</Link>

            <section className='mt-7'>
                <div className="flex flex-wrap gap-x-4 gap-y-5">
                    {
                        notes.map((note) => (
                            <NoteItem key={note.id} note={note}></NoteItem>
                        ))
                    }
                </div>
                    {
                        noData ? (
                            <p>Tidak ada Catatan</p>
                        ) : (
                            <></>
                        )
                    }
            </section>
        </div>
    )
}

export default Notes
