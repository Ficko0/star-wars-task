type SortingComponentProps = {
  sortField: string;
  onSortFieldChange: (field: string) => void;
  sortOrder: string;
  onSortOrderChange: () => void;
};

export default function SortingComponent({
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
}: SortingComponentProps) {
  return (
    <div className="flex justify-around items-center my-5">
      <select
        className="border border-gray-300 px-4 py-2 font-medium rounded-lg bg-gray-200 hover:bg-gray-300 transition hover:cursor-pointer"
        value={sortField}
        onChange={(e) => onSortFieldChange(e.target.value)}
      >
        <option value="title">Sort By Title</option>
        <option value="releaseDate">Sort By Release Year</option>
      </select>
      <button
        className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition"
        onClick={onSortOrderChange}
      >
        {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>
    </div>
  );
}
