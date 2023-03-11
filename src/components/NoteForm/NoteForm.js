import React, { useContext, useState } from "react";
import { NotesContext } from "../../NotesContext/NotesContext";
import "./NoteForm.css"

function NoteForm() {

    const [newNoteValue, setNewNoteValue] = useState("")

    const {
        addNote,
        setOpenModal,
    } = useContext(NotesContext)

    const onChange = (event) => {
        setNewNoteValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addNote(newNoteValue);
        setOpenModal(false);
        setNewNoteValue("")
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribi tu nueva Nota</label>
            <textarea
                placeholder="Escribir nota"
                value={newNoteValue}
                onChange={onChange}></textarea>
            <div className="NoteForm-buttonContainer">
                <button
                    type="submit"
                    className="NoteForm-button NoteForm-button--add">
                    Añadir nota
                </button>
                <button
                    type="button"
                    className="NoteForm-button NoteForm-button--cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export { NoteForm }