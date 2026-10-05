function Editor({ note, onChange, onDelete }) {
  if (!note) {
    return (
      <div className="editor">
        <textarea
          disabled
          placeholder="Выберите запись или создайте новую"
        />
      </div>
    );
  }

  return (
    <div className="editor">
      <textarea
        value={note.text}
        onChange={(e) => onChange(note.id, e.target.value)}
        placeholder="Пишите здесь..."
        autoFocus
      />
      <button onClick={() => onDelete(note.id)}>Удалить запись</button>
    </div>
  );
}

export default Editor;