import React from 'react'
import Note from './Note'

export default function Home() {
  return (
    <div>
      <h1 className='my-3'>Add a Note</h1>
      <form action="" className='container'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Note Title</label>
          <input type="email" className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Note Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
      <h1 className="my-3">Your Notes</h1>
      <Note/>
    </div>
  )
}
