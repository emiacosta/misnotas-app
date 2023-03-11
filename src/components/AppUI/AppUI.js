import { NotesContext } from '../../NotesContext/NotesContext';
import { NotesCounter } from '../NotesCounter/NotesCounter'
import { NotesSearch } from '../NotesSearch/NotesSearch';
import { NotesList } from '../NotesList/NotesList';
import { NotesItem } from '../NotesItem/NotesItem';
import { NoteForm } from '../NoteForm/NoteForm';
import { CreateNotesButton } from '../CreateNotesButton/CreateNotesButton'
import { Modal } from '../Modal/Modal';
import { Loader } from '../Loader/Loader';
import { useContext } from 'react';
import "./AppUI.css"

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
        <>  {loading && <Loader />}
            <NotesList>
                {error && <p>Hubo un error</p>}
                {(!loading && !searchedNotes.length) &&
                    <>
                        <NotesCounter />
                        <NotesSearch />
                        <p className='primeraNota'>Crea tu primera Nota!</p>
                    </>}
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