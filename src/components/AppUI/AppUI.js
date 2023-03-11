import { NotesContext } from '../../NotesContext/NotesContext';
import { NotesCounter } from '../NotesCounter/NotesCounter'
import { NotesSearch } from '../NotesSearch/NotesSearch';
import { NotesList } from '../NotesList/NotesList';
import { NotesItem } from '../NotesItem/NotesItem';
import { NoteForm } from '../NoteForm/NoteForm';
import { CreateNotesButton } from '../CreateNotesButton/CreateNotesButton'
import { Modal } from '../Modal/Modal';
import { useContext } from 'react';

function AppUI() {
    const { error,
        loading,
        searchedNotes,
        completeNote,
        deleteNote,
        openModal,
        setOpenModal,
    } = useContext(NotesContext)


    return (
        <>
            <NotesCounter />
            <NotesSearch />

            <NotesList>
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando el contenido...</p>}
                {(!loading && !searchedNotes.length) && <p>Crea tu primera Nota!</p>}
                {searchedNotes.map(note => (
                    <NotesItem
                        key={note.text}
                        text={note.text}
                        completed={note.completed}
                        onComplete={() => completeNote(note.text)}
                        onDelete={() => deleteNote(note.text)} />))}
            </NotesList>
            {!!openModal && (
                <Modal>
                   <NoteForm /> 
                </Modal>
            )}

            <CreateNotesButton 
                setOpenModal={setOpenModal}
            />
        </>
    )
}

export { AppUI }