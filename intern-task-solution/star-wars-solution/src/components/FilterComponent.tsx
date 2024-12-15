type FilterComponentProps = {
  filters: { director: string };
  onFilterChange: (field: string, value: string) => void;
};

export default function FilterComponent({
  filters,
  onFilterChange,
}: FilterComponentProps) {
  return (
    <div className="flex justify-around items-center">
      <input
        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition focus:bg-gray-300"
        type="text"
        placeholder="Search Movie Director"
        onChange={(e) => onFilterChange("director", e.target.value)}
        value={filters.director}
      />
      <input
        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition focus:bg-gray-300"
        type="number"
        placeholder="Search Year"
        onChange={(e) => onFilterChange("year", e.target.value)}
      />
    </div>
  );
}
