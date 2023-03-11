import { useContext } from 'react';
import { NotesContext } from '../../NotesContext/NotesContext';
import './NotesCounter.css';

function NotesCounter() {
  const { totalNotes, completedNote } = useContext(NotesContext)
  return (
    <h2 className="NotesCounter">Has completado {completedNote} de {totalNotes} Notas</h2>
  );
}

export { NotesCounter };