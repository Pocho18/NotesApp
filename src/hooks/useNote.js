import { useContext } from "react"
import { NotesContext } from "../context/NotesContext"

function useNote(){
    const { setNotes } = useContext(NotesContext)

    const addNote = ({id, content, title, color})=>{
        setNotes(prevState=>({
            ...prevState,
            [id]: {title: [title], content: [content], color: [color]}
        }))
    }

    const removeNote = ({ id })=>{
        setNotes(prevState=> {
            // eslint-disable-next-line no-unused-vars
            const { [id]:_ , ...notes } = prevState
            return notes
        })
    }

    return { addNote, removeNote }
}

export default useNote