import { useContext } from 'react';
import { NotesContext } from '../../NotesContext/NotesContext';
import './NotesSearch.css';

function NotesSearch() {
    const { searchValue, setSearchValue } = useContext(NotesContext)
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="NotesSearch"
            placeholder="Busca una nota"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { NotesSearch };