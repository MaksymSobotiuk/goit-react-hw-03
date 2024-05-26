


function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          onFilter(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchBox;