//eslint-disable-next-line
function Notes({title, content, color}){
    return (
        <article className="note">
            <header className="note__header">
                <h3>{title}</h3>
            </header>
            <section className="note__content">
                <textarea readOnly value={content}></textarea>
            </section>
        </article>
    )
}

export default Notes