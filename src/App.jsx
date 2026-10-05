import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");

  const addNote = () => {
    const newNote = {
      id: crypto.randomUUID(),
      text: "",
    };
    setNotes([newNote, ...notes]); 
    setSelectedId(newNote.id);     
    setQuery("");                  
  };

  const updateNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setSelectedId(null); 
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(query.toLowerCase())
  );

  const selectedNote = notes.find((note) => note.id === selectedId);

  return (
    <div className="notebook">
      <Sidebar
        notes={filteredNotes}
        selectedId={selectedId}
        query={query}
        onQueryChange={setQuery}
        onSelect={setSelectedId}
        onAdd={addNote}
      />
      <Editor
        note={selectedNote}
        onChange={updateNote}
        onDelete={deleteNote}
      />
    </div>
  );
}

export default App;