import { NoteProvider } from './NotesContext/NotesContext';
import { AppUI } from './components/AppUI/AppUI';

function App() {

  return (
    <NoteProvider>
      <AppUI />
    </NoteProvider>
  )
}
export default App;