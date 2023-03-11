import './NotesList.css'
function NotesList(props) {
    return (
        <section>
            <ul>{props.children}</ul>
        </section>
    );
}
export { NotesList };