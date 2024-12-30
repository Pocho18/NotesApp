import { createContext, useState } from "react";

export const NotesContext = createContext()

// eslint-disable-next-line
export function NotesProvider ({ children }){
    const [notes, setNotes] = useState({})
    const [openedWindows, setOpenedWindows] = useState({})

    return (
        <NotesContext.Provider value={{
            notes, setNotes,
            openedWindows, setOpenedWindows
        }}>
            {children}
        </NotesContext.Provider>
    )
}