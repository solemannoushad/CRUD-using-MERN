import React from 'react'
import NoteItem from './NoteItem'
import { useContext } from 'react'
import notesContext from '../context/notes/notesContext'

export default function Note() {
  const context = useContext(notesContext);
  const {notes} = context;
  return (
    <div className='container my-3 d-flex flex-wrap justify-content-start'>
      {notes.map((note)=>{
        return <div key={note.id}>
                  <NoteItem title={note.title} description={note.description}/>
               </div>
      })}
    </div>
  )
}
