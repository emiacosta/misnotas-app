import './NotesItem.css';

function NotesItem(props) {
    return (
        <li className="NotesItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}>√</span>
            <p className={`NotesItem-p ${props.completed && 'NotesItem-p--complete'}`}>{props.text}</p>
            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}>X</span>
        </li>
    );
}
export { NotesItem };