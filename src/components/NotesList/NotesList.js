import './NotesList.css'
function NotesList(props) {
    return (
        <section>
            <ul className='NotesList'>{props.children}</ul>
        </section>
    );
}
export { NotesList };