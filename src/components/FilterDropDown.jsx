const FilterDropdown = ({ selectedType, setSelectedType }) => {
  const handleFilterChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="mb-4">
      <select
        id="type-filter"
        value={selectedType}
        onChange={handleFilterChange}
        className="p-[9px] rounded-l-md border w-full md:w-[100px] text-black"
      >
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
