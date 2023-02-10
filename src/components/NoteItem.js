import React from 'react'

export default function NoteItem(props) {
  return (
    <div>
        <div className="card mx-3 my-3">
            <div className="card-body" style={{width: "18rem"}}>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    </div>
  )
}
