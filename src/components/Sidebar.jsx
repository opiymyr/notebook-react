import SearchBox from "./SearchBox";
import NoteList from "./NoteList";

function Sidebar({ notes, selectedId, query, onQueryChange, onSelect, onAdd }) {
  return (
    <div className="sidebar">
      <button onClick={onAdd}>+ Новая запись</button>
      <SearchBox query={query} onChange={onQueryChange} />
      <NoteList notes={notes} selectedId={selectedId} onSelect={onSelect} />
    </div>
  );
}

export default Sidebar;