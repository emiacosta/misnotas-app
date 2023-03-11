import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const NotesContext = createContext();

function NoteProvider(props) {

    const {
        item: notes,
        saveItem: saveNotes,
        loading,
        error,
    } = useLocalStorage("Notes_V1", []);
    const [searchValue, setSearchValue] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const completedNote = notes.filter(note => note.completed).length;
    const totalNotes = notes.length;
    let searchedNotes = [];
    if (!searchValue.length >= 1) { searchedNotes = notes }
    else {
        searchedNotes = notes.filter(note => {
            const noteText = note.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return noteText.includes(searchText);
        });
    }

    const addNote = (text) => {
        const newNotes = [...notes];
        newNotes.push({
            completed: false,
            text,
        });
        saveNotes(newNotes);
    }

    const completeNote = (text) => {
        const noteIndex = notes.findIndex(note => note.text === text)
        const newNotes = [...notes]
        newNotes[noteIndex].completed = true;
        saveNotes(newNotes);
    }

    const deleteNote = (text) => {
        const noteIndex = notes.findIndex(note => note.text === text)
        const newNotes = [...notes]
        newNotes.splice(noteIndex, 1);
        saveNotes(newNotes);
    }

    return (
        <NotesContext.Provider value={{
            loading,
            error,
            totalNotes,
            completedNote,
            searchValue,
            setSearchValue,
            searchedNotes,
            addNote,
            completeNote,
            deleteNote,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </NotesContext.Provider>
    );
}

export { NotesContext, NoteProvider };