function getTitle(text) {
  const firstLine = text.split("\n")[0].trim();
  return firstLine || "Новая запись";
}

function NoteList({ notes, selectedId, onSelect }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li
          key={note.id}
          className={note.id === selectedId ? "note-item selected" : "note-item"}
          onClick={() => onSelect(note.id)}
        >
          {getTitle(note.text)}
        </li>
      ))}
    </ul>
  );
}

export default NoteList;