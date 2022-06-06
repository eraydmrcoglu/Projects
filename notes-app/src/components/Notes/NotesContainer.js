import { useSelector, useDispatch } from 'react-redux';
import { selectFilterNote, setFilterText } from '../../redux/notes/noteSlice';
function NotesContainer() {
  const notes = useSelector((state) => state.notes.items);
  const filterText = useSelector((state) => state.notes.filterText);
  const dispatch = useDispatch();
  const filteredNotes = useSelector(selectFilterNote);
  return (
    <div className="notesContainer">
      {notes.length > 0 && (
        <input
          type="text"
          placeholder="Search notes.."
          className="search"
          value={filterText}
          onChange={(e) => {
            dispatch(setFilterText(e.target.value));
          }}
        />
      )}

      {filteredNotes.map((note) => (
        <details key={note.id} style={{ backgroundColor: `${note.color}` }}>
          <summary>{note.title}</summary>
          <p>{note.body}</p>
        </details>
      ))}
    </div>
  );
}

export default NotesContainer;