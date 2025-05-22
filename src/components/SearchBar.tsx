interface Props {
    value: string;
    onChange: (val: string) => void;
  }
  
  const SearchBar: React.FC<Props> = ({ value, onChange }) => {
    return (
      <input
        type="text"
        className="border p-2 rounded w-full max-w-sm mb-4"
        placeholder="Search by name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  