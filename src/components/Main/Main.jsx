import { useContext } from 'react'
import './Main.css'
import { NotesContext } from '../../context/NotesContext'
import AddModal from '../../shared/modals/AddModal'
import Notes from './Notes/Notes'

function Main (){
    const { notes } = useContext(NotesContext)

    return (
        <main className={`main`}>
            <section className={`main__notes ${Object.keys(notes).length==0 ? 'empty':'contains'}`}>
                {Object.keys(notes).length>0 ? 
                Object.keys(notes).map((item)=>{
                    return <Notes key={item.id} title={item.title} content={item.content} />
                })
                :
                <p>Write your first note</p>}
            </section>
            <section className='main__notes--modals'>
                <AddModal />
            </section>
        </main>
    )
}

export default Main