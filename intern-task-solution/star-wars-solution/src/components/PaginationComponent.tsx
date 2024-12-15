type PaginationComponentProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationComponentProps) {
  return (
    <div className="flex py-4 mx-5 justify-center items-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === 1}
      >
        Next Page
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === totalPages}
      >
        Previous Page
      </button>
    </div>
  );
}
