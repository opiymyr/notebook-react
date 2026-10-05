function SearchBox({ query, onChange }) {
  return (
    <input
      type="text"
      placeholder="Поиск..."
      value={query}                          
      onChange={(e) => onChange(e.target.value)} 
    />
  );
}

export default SearchBox;