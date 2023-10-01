import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
import { getInitialData } from './initialData'
import { useState } from 'react'

export default function App() {
  const [notes, setNotes] = useState(getInitialData, []);
  console.log(notes)

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={notes.length === 0 ? <Notes notes={notes} noData /> : <Notes notes={notes} />} 
        />
        <Route 
          path="/create-note"
          element={<CreateNote setNotes={setNotes} />} 
        />
        <Route
          path="/edit-note/:id"
          element={<EditNote notes={notes} setNotes={setNotes} />} 
        />
      </Routes>
    </BrowserRouter>
  )
}