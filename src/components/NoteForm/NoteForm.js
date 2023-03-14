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
        <div class="formCard" onSubmit={onSubmit}>
            <div class="formCard2">
                <form class="form">
                    <p id="heading">Escribe tu nueva Nota</p>
                    <div class="field">
                        <input type="text" class="input-field" value={newNoteValue}
                            onChange={onChange} autocomplete="off" />
                    </div>
                    <div class="btn">
                        <button class="button1" type="button" onClick={onCancel}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cancelar &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                        <button class="button2" type="submit">Añadir nota</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { NoteForm }