import { FolderIcon, TrashIcon, CogIcon, SearchIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/outline'
import './Header.css'
import { useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'

function Header(){
    const { setOpenedWindows, openedWindows } = useContext(NotesContext)

    const handleClick = (propName)=>{
        if (propName in openedWindows) setOpenedWindows({...openedWindows, [propName]: !openedWindows[propName]})
        else setOpenedWindows({...openedWindows, [propName]: true})
    }
    
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item" onClick={()=>handleClick('addmodal')}>
                        <PlusIcon className='icon__add nav__icon' />
                    </li>
                    <li className="nav__item" onClick={()=>handleClick('searchbar')}>
                        <SearchIcon className='icon__search nav__icon' />
                    </li>
                    <li className="nav__item"><TrashIcon className='icon__remove nav__icon' /></li>
                    <li className="nav__item"><FolderIcon className='icon__library nav__icon'/></li>
                    <li className="nav__item"><CogIcon className='icon__settings nav__icon'/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header