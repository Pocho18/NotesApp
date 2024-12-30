import { CheckIcon } from '@heroicons/react/outline'
import ButtonBar from '../components/ButtonBar'
import { useState } from 'react'
import { useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'
import useNote from '../../hooks/useNote'
import { v4 as uuidv4 } from 'uuid'

function AddModal(){
    const [query, setQuery] = useState('New Note')
    const { openedWindows, setOpenedWindows } = useContext(NotesContext)
    const { addNote } = useNote()

    const handleQuery = e => {
        const newQuery = e.target.value
        if (newQuery.trim().length==0 && query.trim().length==0) return
        setQuery(newQuery)
    }
    const handleBlurQuery = e => {
        const newQuery = e.target.value
        if (newQuery.trim().length==0) return setQuery('New Note')
        setQuery(newQuery)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setOpenedWindows({...openedWindows, addmodal: false})
        addNote({ id: uuidv4(), title: e.target.title.value, content: e.target.content.value })
    }

    return ( ('addmodal' in openedWindows) &&
        <>
        <form className={`addmodal ${openedWindows.addmodal ? 'open':'closed'}`} onSubmit={handleSubmit}>
            <header className="addmodal__header">
                <div className='header__options'>
                    <button className='header__button' type='submit'>
                        <CheckIcon className='header__icon--add-note' type='submit'/>
                    </button>
                    <input type="color" name="color" />
                </div>
                <div className='header__input'>
                    <input type="text" name='title' value={query} onFocus={e=>e.target.select()} onChange={handleQuery} onBlur={handleBlurQuery}/>
                </div>
                <div className='header__buttonbar'>
                    <ButtonBar propName='addmodal'/>
                </div>
            </header>
                <section className='addmodal__textarea'>
                    <textarea placeholder='Write here...' name='content'></textarea>
                </section>
            </form>
        </>
    )
}

export default AddModal