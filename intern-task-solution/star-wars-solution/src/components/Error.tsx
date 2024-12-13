export default function Error({ error }: { error: string }) {
  return (
    <div className="bg-red-200 flex items-center justify-center h-screen py-2 px-4 rounded-lg">
      <h1 className="font-bold text-3xl text-red-600">Error: {error}</h1>
    </div>
  );
}
