import React , {useContext} from 'react'
import { useEffect } from 'react';
import notesContext from '../context/notes/notesContext'

export default function About() {
  useEffect(()=>{
    setInterval(() => {
      a.setState({name: "Abdullah"});
    }, 3000);
    // eslint-disable-next-line
  } , [])
  const a = useContext(notesContext);
  return (
    <div>
      My name is {a.state.name}
    </div>
  )
}
