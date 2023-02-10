import notesContext from "./notesContext";
import { useState } from "react";

const NotesState = (props)=>{

    let initialNotes = [
        {
          "_id": "63e51d7b97fec5486f90b74c",
          "user": "63e3eb0d33b98caad2c89b28",
          "title": "My First Note",
          "description": "A demo Note",
          "tags": "General",
          "date": "2023-02-09T16:21:15.679Z",
          "__v": 0
        },
        {
          "_id": "63e51d936f1bbc192c2f220c",
          "user": "63e3eb0d33b98caad2c89b28",
          "title": "My First Note",
          "description": "A demo Note",
          "tags": "personal",
          "date": "2023-02-09T16:21:39.894Z",
          "__v": 0
        },
        {
          "_id": "63e51e58cf0176c75c40f589",
          "user": "63e3eb0d33b98caad2c89b28",
          "title": "My First Note",
          "description": "A demo Note",
          "tags": "personal",
          "date": "2023-02-09T16:24:56.604Z",
          "__v": 0
        },
        {
          "_id": "63e51e63cf0176c75c40f58b",
          "user": "63e3eb0d33b98caad2c89b28",
          "title": "My New Note",
          "description": "A demo Note haha",
          "tags": "personal",
          "date": "2023-02-09T16:25:07.145Z",
          "__v": 0
        }
      ]
    const [notes , setNotes] = useState(initialNotes);

    return(
        <notesContext.Provider value={{notes , setNotes}}>
            {props.children}
        </notesContext.Provider>
    )
}

export default NotesState;