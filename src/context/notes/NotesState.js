import notesContext from "./notesContext";
import { useState } from "react";

const NotesState = (props)=>{
    const obj = {
        name: "Soleman",
        age: 21
    }
    const [state , setState] = useState(obj);
    return(
        <notesContext.Provider value={{state , setState}}>
            {props.children}
        </notesContext.Provider>
    )
}

export default NotesState;