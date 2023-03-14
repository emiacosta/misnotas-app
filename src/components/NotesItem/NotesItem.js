import './NotesItem.css';

function NotesItem(props) {
    return (
        <div class="noteItem">
            <div className="noteItem__content">
                <p className={`NotesItem-p ${props.completed && 'NotesItem-p--complete'}`}>{props.text}</p>
                <div className='botonesCard'>
                    <span className={`Icon ${props.completed && 'Icon-check--active'}`}
                        onClick={props.onComplete}>√</span>
                    <span
                        className="Icon Icon-delete"
                        onClick={props.onDelete}>X</span>
                </div>
            </div>
        </div>
    );
}
export { NotesItem };