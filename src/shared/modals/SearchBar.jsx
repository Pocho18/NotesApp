import { useState, useContext } from "react"
import { XIcon } from '@heroicons/react/outline'
import { NotesContext } from "../../context/NotesContext"

function SearchBar (){
    const { openedWindows, setOpenedWindows } = useContext(NotesContext)
    const [query, setQuery] = useState('')

    const handleQuery = e => {
        const newQuery = e.target.value
        if (newQuery==' ' && query.length==0) return
        setQuery(newQuery)
    }
    return(('searchbar' in openedWindows) &&

        <div className={`search ${openedWindows.searchbar ? 'open':'closed'}`}>
            <div>
                <input type="text" id="search__input" onChange={handleQuery} value={query} placeholder="Search note..." />
            </div>
            <div>
                <button className="search__button" onClick={()=>setOpenedWindows(prevState=>({...prevState, searchbar: false}))}>
                    <XIcon className="button__icon-search" />
                </button>
            </div>
        </div>
    )
}

export default SearchBar