import { XIcon, MinusIcon } from '@heroicons/react/outline'
import { useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'

// eslint-disable-next-line
function ButtonBar({ propName }){
    const { setOpenedWindows } = useContext(NotesContext)

    return (
        <div className='buttonbar'>
            <button className='buttonbar__minus' type='button'>
                <MinusIcon className='buttonbar__icon minus' />
            </button>  
            <button type='button' className='buttonbar__close' onClick={()=>setOpenedWindows(prevState=>({...prevState, [propName]: false}))}>
                <XIcon className='buttonbar__icon close' />
            </button>
        </div>
    )
}

export default ButtonBar